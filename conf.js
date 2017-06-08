require('babel-register')({ presets: ['es2015'] });
const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  /**
   *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
   *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
   *  if you uncomment directConnect.
   */
  // seleniumServerJar: "node_modules/protractor/node_modules/
  // webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar",
  directConnect: true,

  specs: ['specs/*.spec.js'],
  baseUrl: 'http://merchant.release.accept.blue/login',
  // framework: 'jasmine2',

  onPrepare() {
    // set browser size...
    browser.manage().window().setSize(1024, 800);

    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'spec' }));
  },

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: [
        // disable chrome's wakiness
        '--disable-infobars',
        '--disable-extensions',
        'verbose',
        'log-path=/tmp/chromedriver.log',
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
    },
  },

  jasmineNodeOpts: {
    showColors: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    // overrides jasmine's print method to report dot syntax for custom reports
    print() {},
    defaultTimeoutInterval: 50000,
  },
};
