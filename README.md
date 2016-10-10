# bingo

## Prerequisites
You'll need Node and NPM. That's it. It's recommended to use [NVM](https://github.com/creationix/nvm) in order to use multiple versions of Node on the same system.

## Getting started

From your command line:
```
npm install
```

This will install all the dependencies to get the project up and running.

Make a copy of the `.env.example` file e.g.
```
cp .env.example .env
```

This will define which ports to use; change as necessary.

To fire up your stack use:

```
npm start
```

This will give you some goodies:

 * localhost environment
 * live/hot-reloading
 * continuous testing (@todo), doc generation and linting

### localhost ports

#### `:9000` - web server
This is your development webserver. It will auto-reload with file changes.

#### `:9001` - BrowserSync
Arguably more useful than `:9000`, this is the port the `npm start` command will open and it will sync actions across connected browsers which makes it very useful for testing.

[Check out BrowserSync.io](https://browsersync.io/).

#### `:9002` - BrowserSync UI
This is the UI for BrowserSync to toggle settings etc.

#### `:9003` - Karma (@todo!)
Runs the unit tests in the browser for debugging. Also triggers the command line run of the tests.

#### `:9004` - Test coverage
Displays the test coverage of the application. Although this is auto-generated upon each test run, these pages don't auto-reload.

#### `:9005` - JSDocs
Displays the comment-generated JS Documentation using [JSDoc](http://usejsdoc.org/). Again, it's auto-generated when files are changed but the page must be refreshed manually.

## Webpack

We use Webpack to bundle/build our app. It also serves the application locally in development.

Look at the [Webpack docs](https://webpack.github.io/) for more information.

### Config
```
./config/webpack.config.js
```

By default this repo looks at `src/index.js` for it's entry point to the app.

#### Dev
```
./config/webpack.config.dev.js
```

This basically extends the `webpack.config.js` file with config only appropriate to development; e.g. development settings and plugins.

#### Karma (@todo!)
```
./config/webpack.config.dev.js
```

This basically extends the `webpack.config.js` file with config only appropriate to testing; e.g. isparta code coverage for ES6.

## Documentation and code consistency

The docs are generated using comments within the code, look at [JSDoc](http://usejsdoc.org/) for more information.

The repo also has `.editorconfig` and `.eslintrc` files to try and maintain some level of consistency across the codebases.
