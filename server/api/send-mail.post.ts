import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required.',
    })
  }

  // Create transporter using SMTP credentials from runtime config
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  // Build email content
  const mailOptions = {
    from: `"${body.name}" <${config.smtpUser}>`,
    to: config.contactEmail,
    replyTo: body.email,
    subject: body.subject || `New Contact Form Message from ${body.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #ff5a01, #ff8c42); padding: 32px 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📬 New Contact Message</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">You've received a new inquiry from your portfolio</p>
        </div>

        <!-- Body -->
        <div style="padding: 32px 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;"><a href="mailto:${body.email}" style="color: #ff5a01; text-decoration: none;">${body.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${body.phoneNumber || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 15px;">${body.subject || 'No subject'}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin-top: 24px; padding: 20px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #ff5a01;">
            <p style="color: #888; font-size: 12px; font-weight: 600; text-transform: uppercase; margin: 0 0 8px;">Message</p>
            <p style="color: #333; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${body.message}</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 20px 24px; background: #fafafa; text-align: center; border-top: 1px solid #f0f0f0;">
          <p style="color: #aaa; font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully!' }
  } catch (error: any) {
    console.error('Mail send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    })
  }
})
