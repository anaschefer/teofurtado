// const router = process.env.DEPLOY_ENV === 'GH_PAGES' ? { base: '/rdunk/' } : {};
const router = {};

module.exports = {
  head: {
    title: 'Teo Furtado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Teo Furtado is a graphic designer based in London.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#000000' },
  router,
  build: {
    vueLoader: {
      compilerOptions: {
        preserveWhitespace: false,
      },
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  css: [
    '~/assets/sass/normalize.sass',
    '~/assets/sass/typography.sass',
    '~/assets/sass/base.sass',
  ],
  plugins: [
    {
      src: '~/plugins/touch.js',
      ssr: false,
    },
  ],
};
