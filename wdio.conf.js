exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================

    specs: [
        // './features/**/*.feature'
        //'./features/Login/loginAPI.feature'
        //'./features/**/registerViaApi.feature',
        //'./features/Registration/signup.feature'
        //'./features/Registration/links.feature'
        //'./features/write-post/post.feature',
        //'./features/write-post/edit-post.feature',
        //'./features/write-post/delete-post.feature',
        //'./features/write-post/neg-post.feature',
        //'./features/write-post/post-api.feature',
        //'./features/write-post/bookmarks.feature',
        //'./features/write-review/review.feature',
        //'./features/write-review/edit-review.feature',
        './features/write-review/negative-review.feature',
        //'./features/write-review/delete-review.feature',
        //'./features/google.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============

    maxInstances: 1,

    capabilities: [{

        maxInstances: 1,
        browserName: 
        'chrome',
        'goog:chromeOptions': {
        //     //'args': ['--headless', '--disable-gpu', '--window-size=1280,1024']
             'args': ['--incognito']

    },
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 80000,
    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
    services: ['chromedriver'],

    framework: 'cucumber',
    reporters: ['spec', 'junit'],



    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/post-steps.js',
            './features/step-definitions/review-steps.js',
            './features/step-definitions/api-steps-post.js'],
        //require: [
        //    './features/step-definitions/steps.js',
        //'./features/step-definitions/api-steps-a.js'
        //    './features/step-definitions/regSteps.js'
        //],
        //require: ['./features/step-definitions/login-steps.js', './features/step-definitions/api-steps.js'],
        // "cucumberautocomplete.syncfeatures": "features/*feature",
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        dryRun: false,
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

    // =====
    // Hooks
    // =====

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */


    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
