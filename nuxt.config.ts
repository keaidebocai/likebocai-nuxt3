// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', // pinia持久化
    'pinia-plugin-persistedstate/nuxt',// pinia持久化的可配置性与再水合插件
    '@ant-design-vue/nuxt',// ant-design-vue ui
  ],
  css: [
    '@/assets/scss/global.scss',// 去除浏览器默认样式
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
