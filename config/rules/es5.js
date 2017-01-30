'use strict';

module.exports = {
    "rules": {
        "no-await-in-loop"            : "off",
        "no-template-curly-in-string" : "off",
        "class-methods-use-this"      : "off",
        "no-empty-pattern"            : "off",
        "no-return-await"             : "off",
        "require-await"               : "off",
        "comma-dangle"                : [
            "error",
            {
                "arrays"   : "always-multiline",
                "objects"  : "always-multiline",
                "imports"  : "always-multiline",
                "exports"  : "always-multiline",
                "functions": "never"
            }
        ],
        "func-names"                  : [
            "error",
            "always"
        ],
        "computed-property-spacing"   : "off",
        "arrow-body-style"            : "off",
        "arrow-parens"                : "off",
        "arrow-spacing"               : "off",
        "constructor-super"           : "off",
        "generator-star-spacing"      : "off",
        "no-class-assign"             : "off",
        "no-confusing-arrow"          : "off",
        "no-const-assign"             : "off",
        "no-dupe-class-members"       : "off",
        "no-duplicate-imports"        : "off",
        "no-new-symbol"               : "off",
        "no-restricted-imports"       : "off",
        "no-this-before-super"        : "off",
        "no-useless-computed-key"     : "off",
        "no-useless-constructor"      : "off",
        "no-useless-rename"           : "off",
        "no-var"                      : "off",
        "object-shorthand"            : "off",
        "prefer-arrow-callback"       : "off",
        "prefer-const"                : "off",
        "prefer-destructuring"        : "off",
        "prefer-numeric-literals"     : "off",
        "prefer-promise-reject-errors": "off",
        "prefer-rest-params"          : "off",
        "prefer-spread"               : "off",
        "prefer-template"             : "off",
        "require-yield"               : "off",
        "rest-spread-spacing"         : "off",
        "sort-imports"                : "off",
        "symbol-description"          : "off",
        "template-curly-spacing"      : "off",
        "yield-star-spacing"          : "off"
    }
};
