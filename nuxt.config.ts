// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    // Server-only keys (not exposed to client)
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    contactEmail: process.env.CONTACT_EMAIL || '',
  },

  app: {
    head: {
      title: 'My Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        {
          name: 'description',
          content: 'Portfolio built with Nuxt 3 + Ant Design Vue',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },

  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxtjs/tailwindcss', '@ant-design-vue/nuxt'],
  css: ['@/assets/css/main.css', 'ant-design-vue/dist/reset.css'],
})
