// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache');

module.exports = {
  pwa: {
    dest: 'public',
    runtimeCaching: runtimeCaching,
    disable: process.env.NODE_ENV === 'production' ? false : true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['nl-BE', 'en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'nl-BE',
  },
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
    ],
  },
};
