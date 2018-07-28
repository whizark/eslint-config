'use strict';

module.exports = {
    "rules": {
        "no-async-promise-executor": "off",
        "no-await-in-loop"         : "off",
        "no-return-await"          : "off",
        "require-atomic-update"    : "off",
        "require-await"            : "off",
        "comma-dangle"             : [
            "error",
            {
                "arrays"   : "always-multiline",
                "objects"  : "always-multiline",
                "imports"  : "always-multiline",
                "exports"  : "always-multiline",
                "functions": "never"
            }
        ],
        "prefer-object-spread"     : "off"
    }
};
