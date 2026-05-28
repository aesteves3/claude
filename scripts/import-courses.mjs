import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'Data/Course/Course_export.csv');

function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      continue;
    }
    if (c === ',' && !inQ) {
      out.push(cur);
      cur = '';
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

const csv = fs.readFileSync(csvPath, 'utf8');
const lines = csv.trim().split(/\r?\n/);
const headers = parseCsvLine(lines[0]);

const courses = lines.slice(1).map((line) => {
  const cols = parseCsvLine(line);
  const row = Object.fromEntries(headers.map((h, i) => [h, cols[i] ?? '']));
  let modules = [];
  try {
    modules = JSON.parse(row.modules.replace(/""/g, '"'));
  } catch {
    modules = [];
  }
  const priceRaw = row.price;
  const priceNum = Number(String(priceRaw).replace(/[^0-9.]/g, ''));
  return {
    id: row.id,
    title: row.title,
    certification_level: row.certification_level,
    description: row.description,
    long_description: row.long_description,
    duration_hours: Number(row.duration_hours) || null,
    duration_label: row.duration_label || null,
    price: Number.isFinite(priceNum) && priceNum > 0 ? priceNum : null,
    price_label: !Number.isFinite(priceNum) || priceNum <= 0 ? priceRaw : null,
    modules,
    modules_label: row.modules_label || null,
    next_start_date: row.next_start_date || null,
    next_start_label: row.next_start_label || null,
    image_url: row.image_url || null,
    is_active: row.is_active === 'true',
  };
}).filter((c) => c.is_active);

const outDir = path.join(root, 'public/data');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'courses.json'), JSON.stringify(courses, null, 2));
console.log(`Wrote ${courses.length} courses to public/data/courses.json`);
