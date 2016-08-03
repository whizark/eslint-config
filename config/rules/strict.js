'use strict';

module.exports = {
    "rules"   : {
        "no-cond-assign"               : [
            "error",
            "except-parens"
        ],
        "no-console"                   : "error",
        "no-constant-condition"        : [
            "warn",
            {
                "checkLoops": true
            }
        ],
        "no-control-regex"             : "error",
        "no-debugger"                  : "error",
        "no-dupe-args"                 : "error",
        "no-dupe-keys"                 : "error",
        "no-duplicate-case"            : "error",
        "no-empty"                     : [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-character-class"     : "error",
        "no-ex-assign"                 : "error",
        "no-extra-boolean-cast"        : "error",
        "no-extra-parens"              : [
            "error",
            "all",
            {
                "conditionalAssign"      : false,
                "returnAssign"           : false,
                "nestedBinaryExpressions": false
            }
        ],
        "no-extra-semi"                : "error",
        "no-func-assign"               : "error",
        "no-inner-declarations"        : [
            "error",
            "both"
        ],
        "no-invalid-regexp"            : [
            "error",
            {
                "allowConstructorFlags": [
                    "u",
                    "y"
                ]
            }
        ],
        "no-irregular-whitespace"      : [
            "error",
            {
                "skipStrings"  : true,
                "skipComments" : false,
                "skipRegExps"  : false,
                "skipTemplates": false
            }
        ],
        "no-negated-in-lhs"            : "error",
        "no-obj-calls"                 : "error",
        "no-prototype-builtins"        : "error",
        "no-regex-spaces"              : "error",
        "no-sparse-arrays"             : "error",
        "no-unexpected-multiline"      : "error",
        "no-unreachable"               : "error",
        "no-unsafe-finally"            : "error",
        "use-isnan"                    : "error",
        "valid-jsdoc"                  : [
            "error",
            {
                "prefer"                  : {
                    "return": "returns"
                },
                "requireReturn"           : true,
                "requireParamDescription" : true,
                "requireReturnDescription": true,
                "matchDescription"        : "^[A-Z][\\s\\S]*[.]$",
                "requireReturnType"       : true,
                "preferType"              : {
                    "bool"    : "boolean",
                    "Bool"    : "boolean",
                    "Boolean" : "boolean",
                    "Number"  : "number",
                    "String"  : "string",
                    "array"   : "Array",
                    "object"  : "Object",
                    "Function": "function"
                }
            }
        ],
        "valid-typeof"                 : "error",
        "accessor-pairs"               : [
            "error",
            {
                "getWithoutSet": false,
                "setWithoutGet": true
            }
        ],
        "array-callback-return"        : "error",
        "block-scoped-var"             : "error",
        "complexity"                   : [
            "error",
            {
                "max": 20
            }
        ],
        "consistent-return"            : [
            "warn",
            {
                "treatUndefinedAsUnspecified": false
            }
        ],
        "curly"                        : [
            "error",
            "all"
        ],
        "default-case"                 : [
            "error",
            {
                "commentPattern": "^no default$"
            }
        ],
        "dot-location"                 : [
            "error",
            "property"
        ],
        "dot-notation"                 : [
            "error",
            {
                "allowKeywords": true,
                "allowPattern" : ""
            }
        ],
        "eqeqeq"                       : [
            "error",
            "always"
        ],
        "guard-for-in"                 : "error",
        "no-alert"                     : "error",
        "no-caller"                    : "error",
        "no-case-declarations"         : "error",
        "no-div-regex"                 : "error",
        "no-else-return"               : "error",
        "no-empty-function"            : [
            "error",
            {
                "allow": []
            }
        ],
        "no-empty-pattern"             : "error",
        "no-eq-null"                   : "error",
        "no-eval"                      : "error",
        "no-extend-native"             : [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-extra-bind"                : "error",
        "no-extra-label"               : "error",
        "no-fallthrough"               : [
            "error",
            {
                "commentPattern": "break[\\s\\w]+omitted"
            }
        ],
        "no-floating-decimal"          : "error",
        "no-implicit-coercion"         : [
            "off",
            {
                "boolean": true,
                "number" : true,
                "string" : true,
                "allow"  : []
            }
        ],
        "no-implicit-globals"          : "error",
        "no-implied-eval"              : "error",
        "no-invalid-this"              : "error",
        "no-iterator"                  : "error",
        "no-labels"                    : "error",
        "no-lone-blocks"               : "error",
        "no-loop-func"                 : "error",
        "no-magic-numbers"             : [
            "warn",
            {
                "ignore"            : [],
                "enforceConst"      : false,
                "ignoreArrayIndexes": false,
                "detectObjects"     : false
            }
        ],
        "no-multi-spaces"              : [
            "error",
            {
                "exceptions": {
                    "Property"            : true,
                    "VariableDeclarator"  : true,
                    "AssignmentExpression": true,
                    "ImportDeclaration"   : true
                }
            }
        ],
        "no-multi-str"                 : "error",
        "no-native-reassign"           : [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-new"                       : "error",
        "no-new-func"                  : "error",
        "no-new-wrappers"              : "error",
        "no-octal"                     : "error",
        "no-octal-escape"              : "error",
        "no-param-reassign"            : [
            "error",
            {
                "props": false
            }
        ],
        "no-proto"                     : "error",
        "no-redeclare"                 : [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "no-return-assign"             : [
            "error",
            "except-parens"
        ],
        "no-script-url"                : "error",
        "no-self-assign"               : "error",
        "no-self-compare"              : "error",
        "no-sequences"                 : "error",
        "no-throw-literal"             : "error",
        "no-unmodified-loop-condition" : "warn",
        "no-unused-expressions"        : [
            "error",
            {
                "allowShortCircuit": false,
                "allowTernary"     : false
            }
        ],
        "no-unused-labels"             : "error",
        "no-useless-call"              : "error",
        "no-useless-concat"            : "error",
        "no-useless-escape"            : "error",
        "no-void"                      : "error",
        "no-warning-comments"          : [
            "error",
            {
                "terms"   : [
                    "todo",
                    "fixme",
                    "xxx"
                ],
                "location": "start"
            }
        ],
        "no-with"                      : "error",
        "radix"                        : [
            "error",
            "always"
        ],
        "vars-on-top"                  : "error",
        "wrap-iife"                    : [
            "error",
            "outside"
        ],
        "yoda"                         : [
            "error",
            "never",
            {
                "exceptRange" : false,
                "onlyEquality": false
            }
        ],
        "strict"                       : [
            "error",
            "safe"
        ],
        "init-declarations"            : [
            "off",
            "always"
        ],
        "no-catch-shadow"              : "error",
        "no-delete-var"                : "error",
        "no-label-var"                 : "error",
        "no-restricted-globals"        : [
            "error"
        ],
        "no-shadow"                    : [
            "error",
            {
                "builtinGlobals": false,
                "hoist"         : "all",
                "allow"         : []
            }
        ],
        "no-shadow-restricted-names"   : "error",
        "no-undef"                     : [
            "error",
            {
                "typeof": true
            }
        ],
        "no-undef-init"                : "error",
        "no-undefined"                 : "error",
        "no-unused-vars"               : [
            "error",
            {
                "vars"        : "all",
                "args"        : "after-used",
                "caughtErrors": "all"
            }
        ],
        "no-use-before-define"         : [
            "error",
            {
                "functions": true,
                "classes"  : true
            }
        ],
        "callback-return"              : [
            "error",
            [
                "callback",
                "cb",
                "next"
            ]
        ],
        "global-require"               : "error",
        "handle-callback-err"          : [
            "error",
            "err"
        ],
        "no-mixed-requires"            : [
            "error",
            {
                "grouping" : true,
                "allowCall": true
            }
        ],
        "no-new-require"               : "error",
        "no-path-concat"               : "error",
        "no-process-env"               : "error",
        "no-process-exit"              : "error",
        "no-restricted-modules"        : "error",
        "no-sync"                      : "warn",
        "no-tabs"                      : "error",
        "block-spacing"                : [
            "error",
            "always"
        ],
        "array-bracket-spacing"        : [
            "error",
            "never",
            {
                "singleValue"    : false,
                "objectsInArrays": false,
                "arraysInArrays" : false
            }
        ],
        "brace-style"                  : [
            "error",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "camelcase"                    : "error",
        "comma-dangle"                 : [
            "error",
            "never"
        ],
        "comma-spacing"                : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ],
        "comma-style"                  : [
            "error",
            "last",
            {
                "exceptions": {
                    "ArrayExpression"    : false,
                    "ObjectExpression"   : false,
                    "VariableDeclaration": false
                }
            }
        ],
        "computed-property-spacing"    : [
            "error",
            "never"
        ],
        "consistent-this"              : [
            "warn",
            "that"
        ],
        "eol-last"                     : [
            "error",
            "unix"
        ],
        "func-names"                   : [
            "error",
            "always"
        ],
        "func-style"                   : [
            "off",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "id-blacklist"                 : [
            "off"
        ],
        "id-length"                    : [
            "off",
            {
                "min"       : 2,
                "max"       : 10,
                "properties": "always",
                "exceptions": []
            }
        ],
        "id-match"                     : [
            "off",
            "^[a-z]+([A-Z][a-z]+)*$",
            {
                "properties"      : false,
                "onlyDeclarations": false
            }
        ],
        "indent"                       : [
            "error",
            4,
            {
                "SwitchCase"        : 1,
                "VariableDeclarator": {
                    "var"  : 1,
                    "let"  : 1,
                    "const": 1
                },
                "outerIIFEBody"     : 1,
                "MemberExpression"  : 1
            }
        ],
        "jsx-quotes"                   : [
            "error",
            "prefer-double"
        ],
        "key-spacing"                  : [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon" : true,
                    "mode"       : "strict"
                },
                "multiLine" : {
                    "beforeColon": false,
                    "afterColon" : true
                },
                "align"     : {
                    "beforeColon": false,
                    "afterColon" : true,
                    "on"         : "colon",
                    "mode"       : "strict"
                }
            }
        ],
        "keyword-spacing"              : [
            "error",
            {
                "before"   : true,
                "after"    : true,
                "overrides": {}
            }
        ],
        "linebreak-style"              : [
            "error",
            "unix"
        ],
        "lines-around-comment"         : [
            "error",
            {
                "beforeBlockComment": true,
                "afterBlockComment" : false,
                "beforeLineComment" : true,
                "afterLineComment"  : false,
                "allowBlockStart"   : true,
                "allowBlockEnd"     : false,
                "allowObjectStart"  : true,
                "allowObjectEnd"    : false,
                "allowArrayStart"   : true,
                "allowArrayEnd"     : false
            }
        ],
        "max-depth"                    : [
            "warn",
            {
                "max": 4
            }
        ],
        "max-len"                      : [
            "warn",
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
        "max-lines"                    : [
            "warn",
            {
                "max"           : 300,
                "skipBlankLines": true,
                "skipComments"  : true
            }
        ],
        "max-nested-callbacks"         : [
            "warn",
            {
                "max": 10
            }
        ],
        "max-params"                   : [
            "off",
            {
                "max": 3
            }
        ],
        "max-statements"               : [
            "off",
            {
                "max": 10
            },
            {
                "ignoreTopLevelFunctions": true
            }
        ],
        "max-statements-per-line"      : [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-ternary"            : "off",
        "new-cap"                      : [
            "error",
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
        "new-parens"                   : "error",
        "newline-after-var"            : [
            "error",
            "always"
        ],
        "newline-before-return"        : "error",
        "newline-per-chained-call"     : [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-array-constructor"         : "error",
        "no-bitwise"                   : [
            "off",
            {
                "allow"    : [],
                "int32Hint": false
            }
        ],
        "no-continue"                  : "off",
        "no-inline-comments"           : "error",
        "no-lonely-if"                 : "error",
        "no-mixed-operators"           : [
            "error",
            {
                "allowSamePrecedence": true
            }
        ],
        "no-mixed-spaces-and-tabs"     : "error",
        "no-multiple-empty-lines"      : [
            "error",
            {
                "max"   : 2,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition"         : "error",
        "no-nested-ternary"            : "error",
        "no-new-object"                : "error",
        "no-plusplus"                  : [
            "off",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax"         : [
            "error"
        ],
        "no-spaced-func"               : "error",
        "no-ternary"                   : "off",
        "no-trailing-spaces"           : [
            "error",
            {
                "skipBlankLines": false
            }
        ],
        "no-underscore-dangle"         : [
            "error",
            {
                "allow"          : [],
                "allowAfterThis" : false,
                "allowAfterSuper": false
            }
        ],
        "no-unneeded-ternary"          : [
            "error",
            {
                "defaultAssignment": true
            }
        ],
        "no-whitespace-before-property": "error",
        "object-curly-newline"         : [
            "warn",
            {
                "ObjectExpression": {
                    "multiline"    : true,
                    "minProperties": 2
                },
                "ObjectPattern"   : {
                    "multiline"    : true,
                    "minProperties": 2
                }
            }
        ],
        "object-curly-spacing"         : [
            "error",
            "never",
            {
                "objectsInObjects": false,
                "arraysInObjects" : false
            }
        ],
        "object-property-newline"      : [
            "warn",
            {
                "allowMultiplePropertiesPerLine": false
            }
        ],
        "one-var"                      : [
            "error",
            {
                "var"  : "never",
                "let"  : "never",
                "const": "never"
            }
        ],
        "one-var-declaration-per-line" : [
            "error",
            "always"
        ],
        "operator-assignment"          : [
            "error",
            "always"
        ],
        "operator-linebreak"           : [
            "error",
            "after",
            {
                "overrides": {
                    "?": "ignore",
                    ":": "ignore"
                }
            }
        ],
        "padded-blocks"                : [
            "error",
            {
                "blocks"  : "never",
                "switches": "never",
                "classes" : "never"
            }
        ],
        "quote-props"                  : [
            "error",
            "consistent-as-needed",
            {
                "keywords"   : true,
                "unnecessary": true,
                "numbers"    : false
            }
        ],
        "quotes"                       : [
            "error",
            "single",
            {
                "avoidEscape"          : true,
                "allowTemplateLiterals": true
            }
        ],
        "require-jsdoc"                : [
            "warn",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition"   : true,
                    "ClassDeclaration"   : true
                }
            }
        ],
        "semi"                         : [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": false
            }
        ],
        "semi-spacing"                 : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ],
        "sort-vars"                    : [
            "warn",
            {
                "ignoreCase": false
            }
        ],
        "space-before-blocks"          : [
            "error",
            {
                "functions": "always",
                "keywords" : "always",
                "classes"  : "always"
            }
        ],
        "space-before-function-paren"  : [
            "error",
            {
                "anonymous": "always",
                "named"    : "never"
            }
        ],
        "space-in-parens"              : [
            "error",
            "never",
            {
                "exceptions": []
            }
        ],
        "space-infix-ops"              : [
            "error",
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops"              : [
            "error",
            {
                "words"    : true,
                "nonwords" : false,
                "overrides": {}
            }
        ],
        "spaced-comment"               : [
            "error",
            "always",
            {
                "line" : {
                    "markers"   : [],
                    "exceptions": []
                },
                "block": {
                    "markers"   : [],
                    "exceptions": [],
                    "balanced"  : true
                }
            }
        ],
        "unicode-bom"                  : [
            "error",
            "never"
        ],
        "wrap-regex"                   : "off",
        "arrow-body-style"             : [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": false
            }
        ],
        "arrow-parens"                 : [
            "error",
            "always"
        ],
        "arrow-spacing"                : [
            "error",
            {
                "before": true,
                "after" : true
            }
        ],
        "constructor-super"            : "error",
        "generator-star-spacing"       : [
            "error",
            {
                "before": true,
                "after" : false
            }
        ],
        "no-class-assign"              : "error",
        "no-confusing-arrow"           : [
            "error",
            {
                "allowParens": false
            }
        ],
        "no-const-assign"              : "error",
        "no-dupe-class-members"        : "error",
        "no-duplicate-imports"         : [
            "error",
            {
                "includeExports": true
            }
        ],
        "no-new-symbol"                : "error",
        "no-restricted-imports"        : [
            "error"
        ],
        "no-this-before-super"         : "error",
        "no-useless-computed-key"      : "error",
        "no-useless-constructor"       : "error",
        "no-useless-rename"            : [
            "error",
            {
                "ignoreImport"       : false,
                "ignoreExport"       : false,
                "ignoreDestructuring": false
            }
        ],
        "no-var"                       : "error",
        "object-shorthand"             : [
            "error",
            "always",
            {
                "avoidQuotes"       : true,
                "ignoreConstructors": false
            }
        ],
        "prefer-arrow-callback"        : [
            "error",
            {
                "allowNamedFunctions": false,
                "allowUnboundThis"   : true
            }
        ],
        "prefer-const"                 : [
            "warn",
            {
                "destructuring"         : "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "prefer-reflect"               : [
            "error",
            {
                "exceptions": []
            }
        ],
        "prefer-rest-params"           : "error",
        "prefer-spread"                : "error",
        "prefer-template"              : "warn",
        "require-yield"                : "error",
        "rest-spread-spacing"          : [
            "error",
            "never"
        ],
        "sort-imports"                 : [
            "warn",
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
        "template-curly-spacing"       : [
            "error",
            "never"
        ],
        "yield-star-spacing"           : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ]
    },
    "settings": {}
};
