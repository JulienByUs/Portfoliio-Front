const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },

  // Add the exportPathMap function to specify the routes to include in the exported app
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/blog': { page: '/blog' },
    };
  },

  // Configure images.unoptimized to disable Image Optimization API
  images: {
    unoptimized: true,
  },
});