'use strict';

module.exports = {
    "extends"      : [],
    "parserOptions": {
        "ecmaVersion" : 5,
        "sourceType"  : "script",
        "ecmaFeatures": {
            "globalReturn" : false,
            "impliedStrict": false,
            "jsx"          : false
        }
    },
    "parser"       : "espree",
    "env"          : {
        "browser"            : false,
        "node"               : false,
        "commonjs"           : false,
        "shared-node-browser": false,
        "es6"                : false,
        "worker"             : false,
        "amd"                : false,
        "mocha"              : false,
        "jasmine"            : false,
        "jest"               : false,
        "phantomjs"          : false,
        "qunit"              : false,
        "jquery"             : false,
        "prototypejs"        : false,
        "shelljs"            : false,
        "meteor"             : false,
        "mongo"              : false,
        "applescript"        : false,
        "nashorn"            : false,
        "serviceworker"      : false,
        "atomtest"           : false,
        "embertest"          : false,
        "webextensions"      : false,
        "greasemonkey"       : false
    },
    "plugins"      : [],
    "globals"      : {},
    "rules"        : {},
    "settings"     : {}
};
