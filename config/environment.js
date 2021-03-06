/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'Boom-Bap-DrumMachine',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
          // Here you can pass flags/options to your application instance
          // when it is created
        },
        contentSecurityPolicy: {
          'default-src': "'none'",
          'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com",
          'font-src': "'self'",
          'connect-src': "'self' wss://*.firebaseio.com",
          'img-src': "'self' *",
          'style-src': "'self' 'unsafe-inline'",
          'frame-src': "'self' https://*.firebaseio.com"
        }
      };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

    // ADDED for deployment to gh-pages
  if (environment === 'production') {
    ENV.baseURL = '/Boom-Bap-DrumMachine/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/Boom-Bap-DrumMachine/';
    ENV.locationType = 'hash';
    ENV.baseURL = '/Boom-Bap-DrumMachine/';

  }

  return ENV;
};
