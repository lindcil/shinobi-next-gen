// Compte les techniques jouables de Shinobi Next Generation (ids uniques de TECH) et vérifie le seuil de 500.
// usage : node tools/count_moves.js [chemin/vers/index.html]   (nécessite playwright-core + Chrome)
const { chromium } = require('playwright-core'); const path = require('path');
(async () => {
  const f = 'file://' + path.resolve(process.argv[2] || 'index.html');
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox'] }); const p = await b.newPage();
  await p.goto(f); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => { const ids = Object.keys(TECH); const by = {}; for (const id of ids) { const c = TECH[id].cat || '?'; by[c] = (by[c] || 0) + 1; }
    const ng = ids.filter((id) => TECH[id].ng); const ngBy = {}; for (const id of ng) { const e = TECH[id].ng; ngBy[e] = (ngBy[e] || 0) + 1; }
    const modes = Object.keys(MODES); const ngModes = modes.filter((m) => MODES[m].ng).map((m) => MODES[m].n);
    const broken = []; for (const m of modes) for (const s of MODES[m].stages) for (const id of [...(s.skills || []), s.ult].filter(Boolean)) if (!TECH[id] && !ids.some((k) => k.startsWith(id + '_'))) broken.push(m + ':' + id);
    return { total: ids.length, byCat: by, boruto: ng.length, borutoBy: ngBy, modes: modes.length, ngModes, broken: broken.slice(0, 20), nBroken: broken.length }; });
  console.log(JSON.stringify(r, null, 1)); console.log(r.total >= 500 ? `OK : ${r.total} techniques (≥ 500)` : `ÉCHEC : ${r.total} < 500`);
  await b.close(); process.exit(r.total >= 500 ? 0 : 1);
})();
