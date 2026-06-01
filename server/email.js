import nodemailer from 'nodemailer';

const SMTP_TIMEOUT_MS = 15_000;

/**
 * Send email via Zoho Mail SMTP.
 *
 * Environment variables on Render:
 *   MAIL_HOST         = smtppro.zoho.com
 *   MAIL_PORT         = 465
 *   MAIL_USERNAME     = contato@nautk.org
 *   MAIL_PASSWORD     = your Zoho app password
 *   MAIL_FROM_ADDRESS = contato@nautk.org
 *   MAIL_FROM_NAME    = NAUTK (contato)
 *   MAIL_TO           = contato@nautk.org  (optional, defaults to MAIL_FROM_ADDRESS)
 *   MAIL_ENCRYPTION   = ssl
 */
export async function sendMail({ subject, html }) {
  const host = process.env.MAIL_HOST;
  const port = Number(process.env.MAIL_PORT || 465);
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD;
  const fromAddress = process.env.MAIL_FROM_ADDRESS || user;
  const fromName    = process.env.MAIL_FROM_NAME || 'NAUTK';
  const to          = process.env.MAIL_TO || fromAddress;

  if (!host || !user || !pass) {
    console.warn('[email skipped] MAIL_HOST, MAIL_USERNAME or MAIL_PASSWORD not set.');
    return;
  }

  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout:   SMTP_TIMEOUT_MS,
    socketTimeout:     SMTP_TIMEOUT_MS,
  });

  const from = fromName ? `"${fromName}" <${fromAddress}>` : fromAddress;

  await transporter.sendMail({ from, to, subject, html });
  console.log(`[email sent via Zoho SMTP] ${subject}`);
}
