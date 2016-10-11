const context = require.context(
    '../src/', true, /^(?!((\.\/index\.js)|(.*spec?))).*\.jsx?$/
);
context.keys().forEach(context);
