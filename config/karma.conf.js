module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern: '**/tests/**/*.spec.js',
                watched: false,
                included: true,
                served: true
            }
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/tests/**/*.spec.js': ['webpack', 'sourcemap']
        },

        coverageReporter: {
            dir: 'reports/coverage',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'text', subdir: '.', file: 'coverage.txt' },
                { type: 'cobertura', subdir: '.', file: 'coverage.xml' }
            ]
        },

        junitReporter: {
            outputDir: 'reports/test',
            outputFile: 'test-results.xml',
            suite: '',
            useBrowserName: false
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage', 'junit'],

        // web server port
        port: 9003,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // config.LOG_DISABLE ||
        // config.LOG_ERROR ||
        // config.LOG_WARN ||
        // config.LOG_INFO ||
        // config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        plugins: [
            'karma-chai',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-notify-reporter',
            'karma-phantomjs-launcher',
            'karma-phantomjs-shim',
            'karma-sinon',
            'karma-sinon-chai',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-webpack'
        ],

        webpack: require('./webpack.config.karma.js'),

        webpackMiddleware: {
            noInfo: true
        },

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
