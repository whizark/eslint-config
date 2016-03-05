'use strict';

module.exports = {
    "parserOptions": {
        "ecmaVersion"  : 6,
        "sourceType"   : "module",
        "parserOptions": {
            "globalReturn"                : false,
            "impliedStrict"               : false,
            "jsx"                         : false,
            "experimentalObjectRestSpread": false
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
    "extends"      : [],
    "rules"        : {
        "comma-dangle"                 : [
            2,
            "never"
        ],
        "no-cond-assign"               : [
            2,
            "except-parens"
        ],
        "no-console"                   : 2,
        "no-constant-condition"        : 1,
        "no-control-regex"             : 2,
        "no-debugger"                  : 2,
        "no-dupe-args"                 : 2,
        "no-dupe-keys"                 : 2,
        "no-duplicate-case"            : 2,
        "no-empty"                     : 2,
        "no-empty-character-class"     : 2,
        "no-ex-assign"                 : 2,
        "no-extra-boolean-cast"        : 2,
        "no-extra-parens"              : [
            2,
            "all",
            {
                "conditionalAssign": false
            }
        ],
        "no-extra-semi"                : 2,
        "no-func-assign"               : 2,
        "no-inner-declarations"        : [
            2,
            "both"
        ],
        "no-invalid-regexp"            : [
            2,
            {
                "allowConstructorFlags": [
                    "u",
                    "y"
                ]
            }
        ],
        "no-irregular-whitespace"      : [
            2,
            {
                "skipComments": false
            }
        ],
        "no-negated-in-lhs"            : 2,
        "no-obj-calls"                 : 2,
        "no-regex-spaces"              : 2,
        "no-sparse-arrays"             : 2,
        "no-unexpected-multiline"      : 2,
        "no-unreachable"               : 2,
        "use-isnan"                    : 2,
        "valid-jsdoc"                  : [
            2,
            {
                "prefer"                  : {
                    "return": "returns"
                },
                "requireReturn"           : true,
                "requireParamDescription" : true,
                "requireReturnDescription": true,
                "matchDescription"        : "^[A-Z].*[.]$",
                "requireReturnType"       : true,
                "preferType"              : {
                    "bool"   : "boolean",
                    "Bool"   : "boolean",
                    "Boolean": "boolean",
                    "Number" : "number",
                    "String" : "string",
                    "array"  : "Array",
                    "object" : "Object"
                }
            }
        ],
        "valid-typeof"                 : 2,
        "accessor-pairs"               : [
            2,
            {
                "getWithoutSet": false,
                "setWithoutGet": true
            }
        ],
        "array-callback-return"        : 2,
        "block-scoped-var"             : 2,
        "complexity"                   : [
            2,
            {
                "maximum": 20
            }
        ],
        "consistent-return"            : 1,
        "curly"                        : [
            2,
            "all"
        ],
        "default-case"                 : 2,
        "dot-location"                 : [
            2,
            "property"
        ],
        "dot-notation"                 : [
            2,
            {
                "allowKeywords": true,
                "allowPattern" : ""
            }
        ],
        "eqeqeq"                       : [
            2
        ],
        "guard-for-in"                 : 2,
        "no-alert"                     : 2,
        "no-caller"                    : 2,
        "no-case-declarations"         : 2,
        "no-div-regex"                 : 2,
        "no-else-return"               : 2,
        "no-empty-function"            : [
            2,
            {
                "allow": []
            }
        ],
        "no-empty-pattern"             : 2,
        "no-eq-null"                   : 2,
        "no-eval"                      : 2,
        "no-extend-native"             : [
            2,
            {
                "exceptions": []
            }
        ],
        "no-extra-bind"                : 2,
        "no-extra-label"               : 2,
        "no-fallthrough"               : 2,
        "no-floating-decimal"          : 2,
        "no-implicit-coercion"         : [
            0,
            {
                "boolean": true,
                "number" : true,
                "string" : true,
                "allow"  : []
            }
        ],
        "no-implicit-globals"          : 2,
        "no-implied-eval"              : 2,
        "no-invalid-this"              : 2,
        "no-iterator"                  : 2,
        "no-labels"                    : 2,
        "no-lone-blocks"               : 2,
        "no-loop-func"                 : 2,
        "no-magic-numbers"             : [
            1,
            {
                "ignore"            : [],
                "enforceConst"      : false,
                "ignoreArrayIndexes": false,
                "detectObjects"     : false
            }
        ],
        "no-multi-spaces"              : [
            2,
            {
                "exceptions": {
                    "Property"            : true,
                    "VariableDeclarator"  : true,
                    "AssignmentExpression": true,
                    "ImportDeclaration"   : true
                }
            }
        ],
        "no-multi-str"                 : 2,
        "no-native-reassign"           : [
            2,
            {
                "exceptions": []
            }
        ],
        "no-new"                       : 2,
        "no-new-func"                  : 2,
        "no-new-wrappers"              : 2,
        "no-octal"                     : 2,
        "no-octal-escape"              : 2,
        "no-param-reassign"            : [
            2,
            {
                "props": false
            }
        ],
        "no-process-env"               : 2,
        "no-proto"                     : 2,
        "no-redeclare"                 : [
            2,
            {
                "builtinGlobals": true
            }
        ],
        "no-return-assign"             : [
            2,
            "except-parens"
        ],
        "no-script-url"                : 2,
        "no-self-assign"               : 2,
        "no-self-compare"              : 2,
        "no-sequences"                 : 2,
        "no-throw-literal"             : 2,
        "no-unmodified-loop-condition" : 1,
        "no-unused-expressions"        : [
            2,
            {
                "allowShortCircuit": false,
                "allowTernary"     : false
            }
        ],
        "no-unused-labels"             : 2,
        "no-useless-call"              : 2,
        "no-useless-concat"            : 2,
        "no-void"                      : 2,
        "no-warning-comments"          : [
            2,
            {
                "terms"   : [
                    "todo",
                    "fixme",
                    "xxx"
                ],
                "location": "start"
            }
        ],
        "no-with"                      : 2,
        "radix"                        : [
            2,
            "always"
        ],
        "vars-on-top"                  : 2,
        "wrap-iife"                    : [
            2,
            "outside"
        ],
        "yoda"                         : [
            2,
            "never",
            {
                "exceptRange" : false,
                "onlyEquality": false
            }
        ],
        "strict"                       : [
            2,
            "safe"
        ],
        "init-declarations"            : [
            0,
            "always"
        ],
        "no-catch-shadow"              : 2,
        "no-delete-var"                : 2,
        "no-label-var"                 : 2,
        "no-restricted-globals"        : [
            2
        ],
        "no-shadow"                    : [
            2,
            {
                "builtinGlobals": false,
                "hoist"         : "all",
                "allow"         : []
            }
        ],
        "no-shadow-restricted-names"   : 2,
        "no-undef"                     : [
            2,
            {
                "typeof": true
            }
        ],
        "no-undef-init"                : 2,
        "no-undefined"                 : 0,
        "no-unused-vars"               : [
            2,
            {
                "vars": "all",
                "args": "after-used"
            }
        ],
        "no-use-before-define"         : [
            2,
            {
                "functions": true,
                "classes"  : true
            }
        ],
        "callback-return"              : [
            2,
            [
                "callback",
                "cb",
                "next"
            ]
        ],
        "global-require"               : 2,
        "handle-callback-err"          : [
            2,
            "err"
        ],
        "no-mixed-requires"            : [
            2,
            {
                "grouping" : true,
                "allowCall": true
            }
        ],
        "no-new-require"               : 2,
        "no-path-concat"               : 2,
        "no-process-exit"              : 2,
        "no-restricted-imports"        : [
            2
        ],
        "no-restricted-modules"        : 2,
        "no-sync"                      : 2,
        "block-spacing"                : [
            2,
            "always"
        ],
        "array-bracket-spacing"        : [
            2,
            "never",
            {
                "singleValue"    : false,
                "objectsInArrays": false,
                "arraysInArrays" : false
            }
        ],
        "brace-style"                  : [
            2,
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "camelcase"                    : 2,
        "comma-spacing"                : [
            2,
            {
                "before": false,
                "after" : true
            }
        ],
        "comma-style"                  : [
            2,
            "last"
        ],
        "computed-property-spacing"    : [
            2,
            "never"
        ],
        "consistent-this"              : [
            2,
            "that"
        ],
        "eol-last"                     : [
            2,
            "unix"
        ],
        "func-names"                   : 2,
        "func-style"                   : [
            0,
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "id-blacklist"                 : [
            0
        ],
        "id-length"                    : [
            0,
            {
                "min"       : 2,
                "max"       : 10,
                "exceptions": []
            }
        ],
        "id-match"                     : [
            0,
            "^[a-z]+([A-Z][a-z]+)*$",
            {
                "properties": false
            }
        ],
        "indent"                       : [
            2,
            4,
            {
                "SwitchCase"        : 1,
                "VariableDeclarator": {
                    "var"  : 1,
                    "let"  : 1,
                    "const": 1
                }
            }
        ],
        "jsx-quotes"                   : [
            2,
            "prefer-double"
        ],
        "key-spacing"                  : [
            2,
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon" : true,
                    "mode"       : "strict"
                },
                "multiLine" : {
                    "align"      : "colon",
                    "beforeColon": false,
                    "afterColon" : true,
                    "mode"       : "strict"
                }
            }
        ],
        "keyword-spacing"              : [
            2,
            {
                "before"   : true,
                "after"    : true,
                "overrides": {}
            }
        ],
        "linebreak-style"              : [
            2,
            "unix"
        ],
        "lines-around-comment"         : [
            2,
            {
                "beforeBlockComment": true,
                "afterBlockComment" : false,
                "beforeLineComment" : false,
                "afterLineComment"  : false,
                "allowBlockStart"   : false,
                "allowBlockEnd"     : false,
                "allowObjectStart"  : false,
                "allowObjectEnd"    : false,
                "allowArrayStart"   : false,
                "allowArrayEnd"     : false
            }
        ],
        "max-depth"                    : [
            1,
            {
                "maximum": 4
            }
        ],
        "max-len"                      : [
            1,
            {
                "code"                  : 80,
                "comments"              : 80,
                "tabWidth"              : 4,
                "ignoreComments"        : false,
                "ignoreTrailingComments": false,
                "ignoreUrls"            : false,
                "ignorePattern"         : ""
            }
        ],
        "max-nested-callbacks"         : [
            1,
            {
                "maximum": 10
            }
        ],
        "max-params"                   : [
            0,
            {
                "maximum": 3
            }
        ],
        "max-statements"               : [
            0,
            {
                "maximum": 10
            },
            {
                "ignoreTopLevelFunctions": true
            }
        ],
        "new-cap"                      : [
            2,
            {
                "newIsCap"          : true,
                "capIsNew"          : true,
                "newIsCapExceptions": [],
                "capIsNewExceptions": [
                    "Array",
                    "Boolean",
                    "Date",
                    "Error",
                    "Function",
                    "Number",
                    "Object",
                    "RegExp",
                    "String",
                    "Symbol"
                ]
            }
        ],
        "new-parens"                   : 2,
        "newline-after-var"            : [
            2,
            "always"
        ],
        "newline-before-return"        : 2,
        "newline-per-chained-call"     : [
            2,
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-array-constructor"         : 2,
        "no-bitwise"                   : [
            0,
            {
                "allow"    : [],
                "int32Hint": false
            }
        ],
        "no-continue"                  : 0,
        "no-inline-comments"           : 2,
        "no-lonely-if"                 : 2,
        "no-mixed-spaces-and-tabs"     : 2,
        "no-multiple-empty-lines"      : [
            2,
            {
                "max"   : 2,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition"         : 2,
        "no-nested-ternary"            : 2,
        "no-new-object"                : 2,
        "no-plusplus"                  : [
            0,
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax"         : [
            2
        ],
        "no-spaced-func"               : 2,
        "no-ternary"                   : 0,
        "no-trailing-spaces"           : [
            2,
            {
                "skipBlankLines": false
            }
        ],
        "no-underscore-dangle"         : [
            2,
            {
                "allow"         : [],
                "allowAfterThis": false
            }
        ],
        "no-unneeded-ternary"          : [
            2,
            {
                "defaultAssignment": true
            }
        ],
        "no-whitespace-before-property": 2,
        "object-curly-spacing"         : [
            2,
            "never",
            {
                "objectsInObjects": false,
                "arraysInObjects" : false
            }
        ],
        "one-var"                      : [
            2,
            {
                "var"  : "never",
                "let"  : "never",
                "const": "never"
            }
        ],
        "one-var-declaration-per-line" : [
            2,
            "always"
        ],
        "operator-assignment"          : [
            2,
            "always"
        ],
        "operator-linebreak"           : [
            2,
            "after",
            {
                "overrides": {
                    "?": "ignore",
                    ":": "ignore"
                }
            }
        ],
        "padded-blocks"                : [
            2,
            {
                "blocks"  : "never",
                "switches": "never",
                "classes" : "never"
            }
        ],
        "quote-props"                  : [
            2,
            "consistent-as-needed",
            {
                "keywords"   : true,
                "unnecessary": true,
                "numbers"    : false
            }
        ],
        "quotes"                       : [
            2,
            "single",
            "avoid-escape"
        ],
        "require-jsdoc"                : [
            2,
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition"   : true,
                    "ClassDeclaration"   : true
                }
            }
        ],
        "semi"                         : [
            2,
            "always",
            {
                "omitLastInOneLineBlock": false
            }
        ],
        "semi-spacing"                 : [
            2,
            {
                "before": false,
                "after" : true
            }
        ],
        "sort-imports"                 : [
            1,
            {
                "ignoreCase"           : false,
                "ignoreMemberSort"     : false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "sort-vars"                    : [
            1,
            {
                "ignoreCase": false
            }
        ],
        "space-before-blocks"          : [
            2,
            {
                "functions": "always",
                "keywords" : "always",
                "classes"  : "always"
            }
        ],
        "space-before-function-paren"  : [
            2,
            {
                "anonymous": "always",
                "named"    : "never"
            }
        ],
        "space-in-parens"              : [
            2,
            "never",
            {
                "exceptions": []
            }
        ],
        "space-infix-ops"              : [
            2,
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops"              : [
            2,
            {
                "words"   : true,
                "nonwords": false
            }
        ],
        "spaced-comment"               : [
            2,
            "always",
            {
                "line" : {
                    "markers"   : [],
                    "exceptions": []
                },
                "block": {
                    "markers"   : [],
                    "exceptions": []
                }
            }
        ],
        "wrap-regex"                   : 0,
        "arrow-body-style"             : [
            2,
            "as-needed"
        ],
        "arrow-parens"                 : [
            2,
            "always"
        ],
        "arrow-spacing"                : [
            2,
            {
                "before": true,
                "after" : true
            }
        ],
        "constructor-super"            : 2,
        "generator-star-spacing"       : [
            2,
            {
                "before": true,
                "after" : false
            }
        ],
        "no-class-assign"              : 2,
        "no-confusing-arrow"           : 2,
        "no-const-assign"              : 2,
        "no-dupe-class-members"        : 2,
        "no-new-symbol"                : 2,
        "no-this-before-super"         : 2,
        "no-useless-constructor"       : 2,
        "no-var"                       : 2,
        "object-shorthand"             : [
            2,
            "always",
            {
                "ignoreConstructors": false
            }
        ],
        "prefer-arrow-callback"        : 2,
        "prefer-const"                 : 1,
        "prefer-reflect"               : [
            0,
            {
                "exceptions": []
            }
        ],
        "prefer-rest-params"           : 2,
        "prefer-spread"                : 2,
        "prefer-template"              : 1,
        "require-yield"                : 2,
        "template-curly-spacing"       : [
            2,
            "never"
        ],
        "yield-star-spacing"           : [
            2,
            {
                "before": false,
                "after" : true
            }
        ]
    },
    "settings"     : {}
};
