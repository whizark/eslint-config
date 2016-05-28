'use strict';

module.exports = {
    "extends": [
        "./env/default.js",
        "./env/node.js",
        "./version/es2015.js",
        "./module/node.js",
        "./rules/strict.js",
        "./rules/node-5.js"
    ].map(require.resolve)
};
