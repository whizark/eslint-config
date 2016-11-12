'use strict';

module.exports = {
    "rules": {
        "no-return-await"   : "off",
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
        "prefer-rest-params": "off"
    }
};
