/**
 * Prints the resume page to PDF over the Chrome DevTools Protocol.
 * A4, no headers, backgrounds kept.
 *
 *   node scripts/print-resume.mjs <url> <output.pdf>
 */
import { execFileSync, spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const url = process.argv[2] ?? 'http://127.0.0.1:4321/kol-portfolio/resume/';
const out = process.argv[3] ?? 'public/resume/roit-sovanmongkol-resume.pdf';
const PORT = 9333;

const chrome = spawn(CHROME, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--remote-allow-origins=*',
  url,
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function targetUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === 'page' && t.url.startsWith('http'));
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {
      /* chrome not up yet */
    }
    await sleep(250);
  }
  throw new Error('Chrome did not expose a page target');
}

const ws = new WebSocket(await targetUrl());
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
});

let id = 0;
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const msgId = ++id;
    const onMessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', onMessage);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', onMessage);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

await send('Page.enable');
await sleep(2500); // let fonts settle

const { data } = await send('Page.printToPDF', {
  printBackground: true,
  preferCSSPageSize: false,
  paperWidth: 8.27,
  paperHeight: 11.69,
  marginTop: 0.4,
  marginBottom: 0.4,
  marginLeft: 0.45,
  marginRight: 0.45,
});

writeFileSync(out, Buffer.from(data, 'base64'));
console.log(`Wrote ${out}`);

ws.close();
chrome.kill();
try {
  execFileSync('pkill', ['-f', `remote-debugging-port=${PORT}`]);
} catch {
  /* already gone */
}
