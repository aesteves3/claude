import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendMail } from './email.js';

dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '.env') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function findProjectRoot() {
  let dir = path.resolve(__dirname, '..');
  for (let i = 0; i < 4; i++) {
    if (fs.existsSync(path.join(dir, 'package.json'))) return dir;
    dir = path.resolve(dir, '..');
  }
  return path.resolve(__dirname, '..');
}

const root = findProjectRoot();
const dataDir = path.join(__dirname, 'data');
const coursesCandidates = [
  path.join(root, 'dist/data/courses.json'),
  path.join(root, 'public/data/courses.json'),
];
const coursesFile = coursesCandidates.find((p) => fs.existsSync(p));

fs.mkdirSync(dataDir, { recursive: true });

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || true,
}));
app.use(express.json({ limit: '64kb' }));

function loadCourses() {
  if (!coursesFile) {
    throw new Error(`courses.json not found. Checked: ${coursesCandidates.join(', ')}`);
  }
  const raw = fs.readFileSync(coursesFile, 'utf8');
  return JSON.parse(raw);
}

function appendJson(fileName, record) {
  const filePath = path.join(dataDir, fileName);
  const list = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
  const entry = { id: crypto.randomUUID(), created_at: new Date().toISOString(), ...record };
  list.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
  return entry;
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const courseLabels = {
  arrais: 'Arrais Amador',
  mestre: 'Mestre Amador',
  capitao: 'Capitão Amador',
  pratica: 'Prática',
  internacional: 'Internacional',
  general: 'Geral',
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/courses', (req, res) => {
  let courses = loadCourses();
  if (req.query.certification_level) {
    courses = courses.filter((c) => c.certification_level === req.query.certification_level);
  }
  if (req.query.is_active === 'true') {
    courses = courses.filter((c) => c.is_active);
  }
  res.json(courses);
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, course_interest, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, e-mail e mensagem são obrigatórios.' });
    }
    const record = appendJson('contact-messages.json', {
      name, email, phone, course_interest, message,
    });
    const subject = `[NAUTK] Nova mensagem de contato – ${name}`;
    const html = `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(phone || 'Não informado')}</p>
      <p><strong>Interesse:</strong> ${escapeHtml(courseLabels[course_interest] || course_interest || 'Geral')}</p>
      <p><strong>Mensagem:</strong></p>
      <pre>${escapeHtml(message)}</pre>
    `;
    await sendMail({ subject, html });
    res.status(201).json({ ok: true, id: record.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao processar mensagem.' });
  }
});

app.post('/api/enrollments', async (req, res) => {
  try {
    const { course_id, course_title, student_name, student_email, student_phone, notes } = req.body || {};
    if (!course_id || !student_name || !student_email) {
      return res.status(400).json({ error: 'Curso, nome e e-mail são obrigatórios.' });
    }
    let resolvedTitle = course_title || course_id;
    try {
      const courses = loadCourses();
      const course = courses.find((c) => c.id === course_id)
        || courses.find((c) => c.certification_level === course_id);
      if (course?.title) resolvedTitle = course.title;
    } catch {
      // courses.json optional when using static frontend data
    }
    const record = appendJson('enrollments.json', {
      course_id,
      course_title: resolvedTitle,
      student_name,
      student_email,
      student_phone,
      notes,
      status: 'pending',
    });
    const subject = `[NAUTK] Nova matrícula – ${student_name}`;
    const html = `
      <h2>Nova solicitação de matrícula</h2>
      <p><strong>Curso:</strong> ${escapeHtml(resolvedTitle)}</p>
      <p><strong>Nome:</strong> ${escapeHtml(student_name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(student_email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(student_phone || 'Não informado')}</p>
      <p><strong>Observações:</strong></p>
      <pre>${escapeHtml(notes || '-')}</pre>
    `;
    await sendMail({ subject, html });
    res.status(201).json({ ok: true, id: record.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao processar matrícula.' });
  }
});

// Serve built frontend when deployed as a single Node app
const distPath = path.join(root, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    // Serve pre-rendered HTML if it exists (from vite-plugin-prerender)
    const prerendered = path.join(distPath, req.path, 'index.html');
    if (fs.existsSync(prerendered)) {
      return res.sendFile(prerendered);
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`NAUTK listening on ${host}:${port}`);
  console.log(`Project root: ${root}`);
  console.log(`Courses: ${coursesFile || 'NOT FOUND — run npm run build'}`);
  console.log(`Static dist: ${fs.existsSync(path.join(root, 'dist')) ? 'yes' : 'no'}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});
