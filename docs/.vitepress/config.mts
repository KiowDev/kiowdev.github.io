import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'ru-RU',
  title: 'Kiow',
  description: 'Проекты и open-source разработки Kiow',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'theme-color', content: '#080b12' }],
    ['meta', { name: 'yandex-verification', content: '3aea310f682d600b' }],
    ['meta', { name: 'google-site-verification', content: '6YWvFoUlnFhIur3xbQAJpxIeZGqmYGkQTMmCM0lI35c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Kiow — проекты и разработки' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Open-source проекты, библиотеки и инструменты Kiow'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://kiowdev.github.io/' }],
    ['link', { rel: 'icon', href: '/kiow-light.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    siteTitle: 'Kiow',
    nav: [
      { text: 'Проекты', link: '/#projects' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KiowDev' }
    ],
    footer: {
      copyright: '© 2026 Kiow'
    },
    outline: false,
    search: false
  },

  sitemap: {
    hostname: 'https://kiowdev.github.io'
  }
});
