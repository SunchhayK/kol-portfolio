/**
 * Generates placeholder images for every project that does not have real art yet.
 * Real Figma exports overwrite these files, same names, same sizes.
 *
 *   node scripts/placeholders.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../data/projects.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const BG = '#0e0e12';
const PANEL = '#17171d';
const LINE = '#262630';
const BLOCK = '#20202a';
const TEXT = '#2d2d38';
const ACCENT = '#b6f23c';

const W = 1600;
const H = 1000;

const rect = (x, y, w, h, fill = TEXT, r = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;

const line = (x, y, w, h = 14, fill = TEXT) => rect(x, y, w, h, fill, h / 2);

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const hash = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

function chrome(w, h) {
  let s = rect(0, 0, w, h, BG);
  s += rect(0, 0, w, 56, '#131318');
  s += rect(0, 55, w, 1, LINE);
  s += `<circle cx="30" cy="28" r="7" fill="${BLOCK}"/>`;
  s += `<circle cx="54" cy="28" r="7" fill="${BLOCK}"/>`;
  s += `<circle cx="78" cy="28" r="7" fill="${BLOCK}"/>`;
  s += rect(120, 18, w * 0.28, 20, BLOCK, 10);
  return s;
}

function sidebar(w, h, rnd) {
  let s = chrome(w, h);
  const rail = 240;
  s += rect(0, 56, rail, h - 56, '#111116');
  s += rect(rail, 56, 1, h - 56, LINE);
  let y = 100;
  for (let i = 0; i < 6; i++) {
    const active = i === 1;
    if (active) s += rect(20, y - 12, rail - 40, 40, '#1b1b22', 6);
    s += rect(38, y, 14, 14, active ? ACCENT : BLOCK, 4);
    s += line(66, y + 1, 90 + rnd() * 60, 12, active ? '#6f7280' : TEXT);
    y += 52;
  }
  s += rect(rail + 60, 110, 460, 34, '#26262f', 6);
  s += line(rail + 60, 180, 300, 12);
  s += line(rail + 60, 208, 220, 12);
  const cardW = (w - rail - 180) / 2;
  [0, 1].forEach((i) => {
    const x = rail + 60 + i * (cardW + 60);
    s += rect(x, 270, cardW, 300, PANEL, 8);
    s += rect(x, 270, cardW, 150, i === 0 ? '#242430' : '#1f1f28', 8);
    s += line(x + 24, 450, cardW - 90, 12);
    s += line(x + 24, 480, cardW - 140, 12);
    s += rect(x + 24, 520, 120, 30, '#1d1d25', 6);
  });
  s += rect(rail + 60, 620, 200, 44, ACCENT, 8);
  s += rect(rail + 60, 700, w - rail - 160, 12);
  s += rect(rail + 60, 730, w - rail - 300, 12);
  return s;
}

function cards(w, h) {
  let s = chrome(w, h);
  s += rect(80, 110, 620, 40, '#26262f', 6);
  s += line(80, 176, 280, 12);
  s += line(80, 204, 200, 12);
  s += rect(w - 300, 108, 220, 52, ACCENT, 8);
  const cw = (w - 160 - 120) / 3;
  for (let i = 0; i < 3; i++) {
    const x = 80 + i * (cw + 60);
    s += rect(x, 300, cw, 380, PANEL, 10);
    s += rect(x, 300, cw, 190, i === 1 ? '#242430' : '#1f1f28', 10);
    s += line(x + 26, 520, cw - 100, 12);
    s += line(x + 26, 550, cw - 150, 12);
    s += rect(x + 26, 600, 90, 26, i === 1 ? ACCENT : '#1d1d25', 5);
  }
  s += rect(80, 730, w - 160, 12);
  s += rect(80, 762, w - 420, 12);
  return s;
}

function form(w, h) {
  let s = chrome(w, h);
  const x = w / 2 - 320;
  s += rect(x, 120, 640, 46, '#26262f', 6);
  s += line(x, 190, 320, 12);
  let y = 250;
  for (let i = 0; i < 4; i++) {
    s += line(x, y, 120, 10, '#3a3a46');
    s += rect(x, y + 24, 640, 62, PANEL, 8);
    s += rect(x + 20, y + 44, 260, 12, TEXT, 6);
    y += 120;
  }
  s += rect(x, y, 260, 56, ACCENT, 8);
  s += rect(x + 290, y, 200, 56, '#1d1d25', 8);
  return s;
}

function list(w, h) {
  let s = chrome(w, h);
  s += rect(80, 110, 420, 40, '#26262f', 6);
  s += rect(w - 280, 108, 200, 46, '#1d1d25', 8);
  for (let i = 0; i < 5; i++) {
    const y = 210 + i * 140;
    s += rect(80, y, w - 160, 112, PANEL, 10);
    s += `<circle cx="140" cy="${y + 56}" r="26" fill="#242430"/>`;
    s += line(190, y + 34, 240, 12);
    s += line(190, y + 62, 380, 12);
    s += rect(w - 300, y + 34, 110, 32, i === 1 ? ACCENT : '#1d1d25', 6);
  }
  return s;
}

function phone(w, h) {
  let s = rect(0, 0, w, h, BG);
  const pw = 420;
  const ph = 760;
  const px = (w - pw) / 2;
  const py = (h - ph) / 2;
  s += rect(px - 14, py - 14, pw + 28, ph + 28, '#16161c', 30);
  s += rect(px, py, pw, ph, '#0b0b0f', 24);
  s += rect(px + pw / 2 - 50, py + 12, 100, 18, '#1c1c24', 9);
  s += rect(px + 28, py + 60, 200, 22, '#2a2a34', 6);
  s += rect(px + 28, py + 96, 120, 10, TEXT, 5);
  for (let i = 0; i < 3; i++) {
    const y = py + 140 + i * 150;
    s += rect(px + 28, y, pw - 56, 126, PANEL, 12);
    s += rect(px + 48, y + 20, 70, 70, i === 0 ? ACCENT : '#242430', 8);
    s += line(px + 140, y + 34, 180, 11);
    s += line(px + 140, y + 58, 130, 11);
    s += rect(px + 140, y + 82, 70, 9, '#33333f', 4);
  }
  s += rect(px + 28, py + ph - 80, pw - 56, 46, '#1a1a22', 10);
  return s;
}

const variants = [sidebar, cards, form, list, phone];

function buildSvg(w, h, variantIndex, seed) {
  const body = variants[variantIndex % variants.length](w, h, seeded(seed));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
}

function toWebp(svg, outPath) {
  const tmp = `${outPath}.tmp.svg`;
  writeFileSync(tmp, svg);
  execFileSync('magick', [tmp, '-quality', '78', '-define', 'webp:method=6', outPath]);
  rmSync(tmp);
}

const OG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  <rect x="0" y="0" width="1200" height="4" fill="#b6f23c"/>
  <g fill="none" stroke="#1c1c22" stroke-width="1">
    ${Array.from({ length: 8 }, (_, i) => `<path d="M${i * 150} 0 V630"/>`).join('')}
    ${Array.from({ length: 5 }, (_, i) => `<path d="M0 ${i * 130} H1200"/>`).join('')}
  </g>
  <circle cx="980" cy="180" r="260" fill="#b6f23c" opacity="0.07"/>
  <text x="80" y="300" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="700" fill="#ededf0">Roit Sovanmongkol</text>
  <text x="80" y="372" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#b6f23c">UX/UI Designer</text>
  <text x="80" y="440" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#8f8f99">Phnom Penh, Cambodia</text>
  <rect x="80" y="500" width="260" height="56" rx="4" fill="#b6f23c"/>
  <text x="120" y="537" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="#0a0a0c">Selected work</text>
</svg>`;

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0a0a0c"/>
  <rect x="4" y="4" width="56" height="56" rx="9" fill="none" stroke="#b6f23c" stroke-width="3"/>
  <text x="32" y="42" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#b6f23c">RS</text>
</svg>`;

const PORTRAIT = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a1a22"/>
      <stop offset="1" stop-color="#0d0d11"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#g)"/>
  <circle cx="400" cy="360" r="150" fill="#232330"/>
  <path d="M160 1000c0-140 108-250 240-250s240 110 240 250z" fill="#232330"/>
  <rect x="60" y="60" width="130" height="34" rx="17" fill="none" stroke="#b6f23c" stroke-width="2" opacity="0.7"/>
</svg>`;

mkdirSync(join(pub, 'work'), { recursive: true });
mkdirSync(join(pub, 'images'), { recursive: true });
mkdirSync(join(pub, 'resume'), { recursive: true });

let count = 0;

for (const project of projects) {
  if (!project.cover) continue;
  const dir = join(pub, 'work', project.slug);
  mkdirSync(dir, { recursive: true });

  const files = [project.cover, ...project.images];
  files.forEach((rel, i) => {
    const seed = hash(project.slug + i);
    toWebp(buildSvg(W, H, seed, seed), join(pub, rel));
    count++;
  });
}

toWebp(PORTRAIT, join(pub, 'images', 'portrait.webp'));
count++;

writeFileSync(join(pub, 'favicon.svg'), FAVICON);
writeFileSync(join(pub, 'og.tmp.svg'), OG);
execFileSync(
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    `--screenshot=${join(pub, 'og.png')}`,
    '--window-size=1200,630',
    `file://${join(pub, 'og.tmp.svg')}`,
  ],
  { stdio: 'ignore' },
);
rmSync(join(pub, 'og.tmp.svg'));
count++;

console.log(`Generated ${count} placeholder files under public/`);
