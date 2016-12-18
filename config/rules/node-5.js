'use strict';

module.exports = {
    "rules": {
        "no-await-in-loop"    : "off",
        "no-return-await"     : "off",
        "require-await"       : "off",
        "comma-dangle"        : [
            "error",
            {
                "arrays"   : "always-multiline",
                "objects"  : "always-multiline",
                "imports"  : "always-multiline",
                "exports"  : "always-multiline",
                "functions": "never"
            }
        ],
        "func-names"          : [
            "error",
            "always"
        ],
        "prefer-destructuring": "off",
        "prefer-rest-params"  : "off"
    }
};
