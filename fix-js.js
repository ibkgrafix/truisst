const fs = require('fs'), path = require('path'), cp = require('child_process');

const ROOT = path.join(__dirname, 'www.truist.com');

const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? (e.name === 'node_modules' ? [] : walk(path.join(d, e.name))) : [path.join(d, e.name)]);

const ok = f => cp.spawnSync(process.execPath, ['--check', f]).status === 0;

const fixOps = s => s
  .replace(/\? \? =/g, '??=').replace(/\| \| =/g, '||=').replace(/& & =/g, '&&=')
  .replace(/\|\| =/g, '||=').replace(/&& =/g, '&&=')
  .replace(/\? \? (?=[^=])/g, '?? ')
  .replace(/\? \.(?=[A-Za-z_$\[\(])/g, '?.');

const fixPrivate = s => s
  .replace(/(?<=[{;}\)])#[ \t]*\r?\n[ \t]*([A-Za-z_$][\w$]*)/g, '#$1')
  .replace(/\b(static|async|get|set)#[ \t]+([A-Za-z_$])/g, '$1 #$2')
  .replace(/\.#[ \t]+([A-Za-z_$])/g, '.#$1')
  .replace(/(?<=[{;}\)])#[ \t]+([A-Za-z_$])/g, '#$1');

for (const f of walk(ROOT).filter(f => f.endsWith('.js'))) {
  if (ok(f)) continue;

  const orig = fs.readFileSync(f, 'utf8');

  let s = fixOps(orig); fs.writeFileSync(f, s);
  if (!ok(f)) { s = fixPrivate(s); fs.writeFileSync(f, s); }

  if (ok(f)) console.log('REPAIRED:', path.relative(ROOT, f));
  else { fs.writeFileSync(f, orig); console.log('STILL BROKEN (restored original):', path.relative(ROOT, f)); }
}

console.log('Done.');
