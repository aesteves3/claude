import nodemailer from 'nodemailer';

const SMTP_TIMEOUT_MS = 15_000;

/**
 * Send email via Zoho Mail SMTP.
 *
 * Required environment variables on Render:
 *   SMTP_HOST   = smtp.zoho.com
 *   SMTP_PORT   = 465
 *   SMTP_USER   = contato@nautk.org
 *   SMTP_PASS   = your Zoho app password
 *   MAIL_TO     = contato@nautk.org
 */
export async function sendMail({ subject, html }) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to   = process.env.MAIL_TO || user;
  const from = process.env.MAIL_FROM || user;

  if (!host || !user || !pass) {
    console.warn('[email skipped] SMTP_HOST, SMTP_USER or SMTP_PASS not set.');
    return;
  }

  const secure = port === 465; // true for SSL, false for TLS (587)

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout:   SMTP_TIMEOUT_MS,
    socketTimeout:     SMTP_TIMEOUT_MS,
  });

  await transporter.sendMail({ from, to, subject, html });
  console.log(`[email sent via Zoho SMTP] ${subject}`);
}
