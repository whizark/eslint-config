'use strict';

module.exports = {
    "rules": {
        "comma-dangle"      : [
            "error",
            {
                "arrays"   : "always-multiline",
                "objects"  : "always-multiline",
                "imports"  : "always-multiline",
                "exports"  : "always-multiline",
                "functions": "never"
            }
        ],
        "prefer-reflect"    : "off",
        "prefer-rest-params": "off"
    }
};
