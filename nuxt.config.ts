export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/font.css'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },

})