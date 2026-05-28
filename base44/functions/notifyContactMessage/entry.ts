import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    const base44 = createClientFromRequest(req);

    const payload = await req.json();
    const data = payload.data || payload;

    const subject = `[NAUTK] Nova mensagem de contato – ${data.name || 'Visitante'}`;

    const courseLabels = {
        arrais: 'Arrais Amador',
        mestre: 'Mestre Amador',
        capitao: 'Capitão Amador',
        pratica: 'Prática',
        internacional: 'Internacional',
        general: 'Geral',
    };

    const body = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#001A33;padding:28px 36px;">
              <p style="margin:0;color:#E8723A;font-size:11px;letter-spacing:3px;font-family:monospace;">NAUTK</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:20px;font-weight:bold;">Nova Mensagem de Contato</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:20px;border-bottom:1px solid #eeeeee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;letter-spacing:1px;font-family:monospace;">NOME</p>
                    <p style="margin:0;font-size:16px;color:#001A33;font-weight:bold;">${data.name || '-'}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #eeeeee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;letter-spacing:1px;font-family:monospace;">EMAIL</p>
                    <p style="margin:0;font-size:15px;color:#001A33;">
                      <a href="mailto:${data.email}" style="color:#E8723A;text-decoration:none;">${data.email || '-'}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #eeeeee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;letter-spacing:1px;font-family:monospace;">TELEFONE</p>
                    <p style="margin:0;font-size:15px;color:#001A33;">${data.phone || 'Não informado'}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #eeeeee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;letter-spacing:1px;font-family:monospace;">INTERESSE</p>
                    <p style="margin:0;font-size:15px;color:#001A33;">${courseLabels[data.course_interest] || 'Geral'}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 0;">
                    <p style="margin:0 0 10px;font-size:11px;color:#999;letter-spacing:1px;font-family:monospace;">MENSAGEM</p>
                    <p style="margin:0;font-size:15px;color:#333;line-height:1.7;white-space:pre-line;">${data.message || '-'}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:20px 36px;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#999;">
                Recebido em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })} (horário de Brasília)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    await base44.asServiceRole.integrations.Core.SendEmail({
        to: 'contato@nautk.org',
        subject,
        body,
    });

    return Response.json({ ok: true });
});