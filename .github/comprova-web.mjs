// Comprova que la web compilada s'obre bé (afegit per pibot, 2026-10-31).
// Obre la pàgina en mida d'escriptori i de mòbil, recull errors de la consola, errors de JavaScript
// i recursos que no carreguen, comprova que la pàgina no surt en blanc i desa captures a captures/
// (pibot les baixa perquè Claude les revisi). Surt amb error si troba algun problema.
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const url = process.argv[2];
if (!url) { console.error("Ús: node comprova-web.mjs <url>"); process.exit(2); }
mkdirSync("captures", { recursive: true });

async function waitServer(target, ms = 60000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    try { const r = await fetch(target); if (r.status < 500) return; } catch { /* encara no */ }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`el servidor no respon a ${target}`);
}

await waitServer(url);
const browser = await chromium.launch();
const problems = [];
const report = [];
for (const [name, viewport] of [["escriptori", { width: 1280, height: 800 }], ["mobil", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const origin = new URL(url).origin;
  page.on("console", (m) => { if (m.type() === "error") problems.push(`[${name}] consola: ${m.text()}`); });
  page.on("pageerror", (e) => problems.push(`[${name}] JavaScript: ${e.message}`));
  page.on("requestfailed", (r) => { if (r.url().startsWith(origin)) problems.push(`[${name}] no carrega: ${r.url()}`); });
  page.on("response", (r) => { if (r.url().startsWith(origin) && r.status() >= 400) problems.push(`[${name}] HTTP ${r.status()}: ${r.url()}`); });
  const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  if (!resp || resp.status() >= 400) problems.push(`[${name}] la pàgina respon ${resp ? resp.status() : "res"}`);
  await page.waitForTimeout(1500);
  const text = (await page.evaluate(() => document.body.innerText || "")).trim();
  if (text.length < 40) problems.push(`[${name}] la pàgina surt pràcticament en blanc (${text.length} caràcters de text)`);
  await page.screenshot({ path: `captures/${name}.png`, fullPage: false });
  await page.screenshot({ path: `captures/${name}-sencera.png`, fullPage: true });
  report.push({ mida: name, titol: await page.title(), caracters_de_text: text.length });
  await page.close();
}
await browser.close();
writeFileSync("captures/informe.json", JSON.stringify({ url, pagines: report, problemes: problems }, null, 2));
console.log(JSON.stringify({ pagines: report, problemes: problems }, null, 2));
if (problems.length) { console.error(`\n${problems.length} problema(es) a la web`); process.exit(1); }
console.log("\nLa web s'obre bé");
