'use strict';

module.exports = {
    "rules"   : {
        "no-async-promise-executor"       : "error",
        "no-await-in-loop"                : "error",
        "no-cond-assign"                  : [
            "error",
            "except-parens"
        ],
        "no-console"                      : "error",
        "no-constant-condition"           : [
            "warn",
            {
                "checkLoops": true
            }
        ],
        "no-constructor-return"           : "error",
        "no-control-regex"                : "error",
        "no-debugger"                     : "error",
        "no-dupe-args"                    : "error",
        "no-dupe-keys"                    : "error",
        "no-duplicate-case"               : "error",
        "no-empty"                        : [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-character-class"        : "error",
        "no-ex-assign"                    : "error",
        "no-extra-boolean-cast"           : "error",
        "no-extra-parens"                 : [
            "warn",
            "all",
            {
                "conditionalAssign"               : false,
                "returnAssign"                    : false,
                "nestedBinaryExpressions"         : false,
                "ignoreJSX"                       : "none",
                "enforceForArrowConditionals"     : true,
                "enforceForSequenceExpressions"   : false,
                "enforceForNewInMemberExpressions": false
            }
        ],
        "no-extra-semi"                   : "error",
        "no-func-assign"                  : "error",
        "no-inner-declarations"           : [
            "error",
            "both"
        ],
        "no-invalid-regexp"               : [
            "error",
            {
                "allowConstructorFlags": [
                    "u",
                    "y"
                ]
            }
        ],
        "no-irregular-whitespace"         : [
            "error",
            {
                "skipStrings"  : true,
                "skipComments" : false,
                "skipRegExps"  : false,
                "skipTemplates": false
            }
        ],
        "no-obj-calls"                    : "error",
        "no-prototype-builtins"           : "error",
        "no-regex-spaces"                 : "error",
        "no-sparse-arrays"                : "error",
        "no-template-curly-in-string"     : "warn",
        "no-unexpected-multiline"         : "error",
        "no-unreachable"                  : "error",
        "no-unsafe-finally"               : "error",
        "no-unsafe-negation"              : [
            "error",
            {
                // true or false (default)
                "enforceForOrderingRelations": true
            }
        ],
        "use-isnan"                       : [
            "error",
            {
                "enforceForSwitchCase": true,
                "enforceForIndexOf"   : true
            }
        ],
        "valid-typeof"                    : [
            "error",
            {
                "requireStringLiterals": true
            }
        ],
        "accessor-pairs"                  : [
            "error",
            {
                "getWithoutSet"         : false,
                "setWithoutGet"         : true,
                "enforceForClassMembers": true
            }
        ],
        "array-callback-return"           : [
            "error",
            {
                "allowImplicit": false
            }
        ],
        "array-element-newline"           : [
            "warn",
            {
                "multiline": true,
                "minItems" : 2
            }
        ],
        "block-scoped-var"                : "error",
        "class-methods-use-this"          : [
            "warn",
            {
                "exceptMethods": []
            }
        ],
        "complexity"                      : [
            "error",
            {
                "max": 20
            }
        ],
        "consistent-return"               : [
            "warn",
            {
                "treatUndefinedAsUnspecified": false
            }
        ],
        "curly"                           : [
            "error",
            "all"
        ],
        "default-case"                    : [
            "error",
            {
                "commentPattern": "^no default$"
            }
        ],
        "default-param-last"              : "error",
        "dot-location"                    : [
            "error",
            "property"
        ],
        "dot-notation"                    : [
            "error",
            {
                "allowKeywords": true,
                "allowPattern" : ""
            }
        ],
        "eqeqeq"                          : [
            "error",
            "always",
            {
                "null": "always"
            }
        ],
        "guard-for-in"                    : "error",
        "no-alert"                        : "error",
        "no-caller"                       : "error",
        "no-case-declarations"            : "error",
        "no-div-regex"                    : "error",
        "no-else-return"                  : [
            "error",
            {
                "allowElseIf": true
            }
        ],
        "no-empty-function"               : [
            "error",
            {
                "allow": []
            }
        ],
        "no-empty-pattern"                : "error",
        "no-eq-null"                      : "error",
        "no-eval"                         : "error",
        "no-extend-native"                : [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-extra-bind"                   : "error",
        "no-extra-label"                  : "error",
        "no-fallthrough"                  : [
            "error",
            {
                "commentPattern": "break[\\s\\w]+omitted"
            }
        ],
        "no-floating-decimal"             : "error",
        "no-global-assign"                : [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-implicit-coercion"            : [
            "off",
            {
                "boolean": true,
                "number" : true,
                "string" : true,
                "allow"  : []
            }
        ],
        "no-implicit-globals"             : "error",
        "no-implied-eval"                 : "error",
        "no-import-assign"                : "error",
        "no-invalid-this"                 : [
            "error",
            {
                "capIsConstructor": true
            }
        ],
        "no-iterator"                     : "error",
        "no-labels"                       : "error",
        "no-lone-blocks"                  : "error",
        "no-loop-func"                    : "error",
        "no-magic-numbers"                : [
            "warn",
            {
                "ignore"            : [],
                "enforceConst"      : false,
                "ignoreArrayIndexes": false,
                "detectObjects"     : false
            }
        ],
        "no-misleading-character-class"   : "error",
        "no-multi-assign"                 : "error",
        "no-multi-spaces"                 : [
            "error",
            {
                "ignoreEOLComments": false,
                "exceptions"       : {
                    "Property"            : true,
                    "VariableDeclarator"  : true,
                    "AssignmentExpression": true,
                    "ImportDeclaration"   : true
                }
            }
        ],
        "no-multi-str"                    : "error",
        "no-new-func"                     : "error",
        "no-new-wrappers"                 : "error",
        "no-new"                          : "error",
        "no-octal-escape"                 : "error",
        "no-octal"                        : "error",
        "no-param-reassign"               : [
            "error",
            {
                "props": false
            }
        ],
        "no-proto"                        : "error",
        "no-redeclare"                    : [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "no-restricted-properties"        : "error",
        "no-return-assign"                : [
            "error",
            "except-parens"
        ],
        "no-return-await"                 : "error",
        "no-script-url"                   : "error",
        "no-self-assign"                  : [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare"                 : "error",
        "no-sequences"                    : "error",
        "no-setter-return"                : "error",
        "no-throw-literal"                : "error",
        "no-unmodified-loop-condition"    : "warn",
        "no-unused-expressions"           : [
            "error",
            {
                "allowShortCircuit"   : false,
                "allowTernary"        : false,
                "allowTaggedTemplates": false
            }
        ],
        "no-unused-labels"                : "error",
        "no-useless-call"                 : "error",
        "no-useless-catch"                : "error",
        "no-useless-concat"               : "error",
        "no-useless-escape"               : "error",
        "no-void"                         : "error",
        "no-warning-comments"             : [
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
        "no-with"                         : "error",
        "nonblock-statement-body-position": [
            "error",
            "beside",
            {
                "overrides": {}
            }
        ],
        "radix"                           : [
            "error",
            "always"
        ],
        "require-atomic-updates"          : "error",
        "require-await"                   : "error",
        "vars-on-top"                     : "error",
        "wrap-iife"                       : [
            "error",
            "outside",
            {
                "functionPrototypeMethods": false
            }
        ],
        "yoda"                            : [
            "error",
            "never",
            {
                "exceptRange" : false,
                "onlyEquality": false
            }
        ],
        "strict"                          : [
            "error",
            "safe"
        ],
        "init-declarations"               : [
            "off",
            "always"
        ],
        "no-delete-var"                   : "error",
        "no-label-var"                    : "error",
        "no-restricted-globals"           : [
            "error"
        ],
        "no-shadow-restricted-names"      : "error",
        "no-shadow"                       : [
            "error",
            {
                "builtinGlobals": false,
                "hoist"         : "all",
                "allow"         : []
            }
        ],
        "no-undef-init"                   : "error",
        "no-undef"                        : [
            "error",
            {
                "typeof": true
            }
        ],
        "no-undefined"                    : "error",
        "no-unused-vars"                  : [
            "error",
            {
                "vars"              : "all",
                "args"              : "after-used",
                "ignoreRestSiblings": false,
                "argsIgnorePattern" : "^(callback|cb|next|done|error|err|resolve|reject)$",
                "caughtErrors"      : "none"
            }
        ],
        "no-use-before-define"            : [
            "error",
            {
                "functions": true,
                "classes"  : true,
                "variables": true
            }
        ],
        "callback-return"                 : [
            "error",
            [
                "callback",
                "cb",
                "next",
                "done"
            ]
        ],
        "global-require"                  : "error",
        "handle-callback-err"             : [
            "error",
            "err"
        ],
        "no-mixed-requires"               : [
            "error",
            {
                "grouping" : true,
                "allowCall": true
            }
        ],
        "no-new-require"                  : "error",
        "no-path-concat"                  : "error",
        "no-process-env"                  : "warn",
        "no-process-exit"                 : "error",
        "no-restricted-modules"           : [
            "error",
            {
                "paths"   : [],
                "patterns": []
            }
        ],
        "no-sync"                         : [
            "warn",
            {
                "allowAtRootLevel": false
            }
        ],
        "array-bracket-newline"           : [
            "warn",
            {
                "multiline": true,
                "minItems" : 2
            }
        ],
        "array-bracket-spacing"           : [
            "error",
            "never",
            {
                "singleValue"    : false,
                "objectsInArrays": false,
                "arraysInArrays" : false
            }
        ],
        "block-spacing"                   : [
            "error",
            "always"
        ],
        "brace-style"                     : [
            "error",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "camelcase"                       : [
            "error",
            {
                "properties"         : "always",
                "ignoreDestructuring": false,
                "ignoreImports"      : false,
                "allow"              : []
            }
        ],
        "capitalized-comments"            : [
            "error",
            "always",
            {
                "line" : {
                    "ignorePattern"            : "",
                    "ignoreInlineComments"     : false,
                    "ignoreConsecutiveComments": true
                },
                "block": {
                    "ignorePattern"            : "",
                    "ignoreInlineComments"     : true,
                    "ignoreConsecutiveComments": true
                }
            }
        ],
        "comma-dangle"                    : [
            "error",
            {
                "arrays"   : "always-multiline",
                "objects"  : "always-multiline",
                "imports"  : "always-multiline",
                "exports"  : "always-multiline",
                "functions": "always-multiline"
            }
        ],
        "comma-spacing"                   : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ],
        "comma-style"                     : [
            "error",
            "last",
            {
                "exceptions": {
                    "ArrayExpression"        : false,
                    "ArrayPattern"           : false,
                    "ArrowFunctionExpression": false,
                    "CallExpression"         : false,
                    "FunctionDeclaration"    : false,
                    "FunctionExpression"     : false,
                    "ImportDeclaration"      : false,
                    "ObjectExpression"       : false,
                    "ObjectPattern"          : false,
                    "NewExpression"          : false,
                    "VariableDeclaration"    : false
                }
            }
        ],
        "computed-property-spacing"       : [
            "error",
            "never",
            {
                "enforceForClassMembers": true
            }
        ],
        "consistent-this"                 : [
            "warn",
            "that"
        ],
        "eol-last"                        : [
            "error",
            "always"
        ],
        "for-direction"                   : "error",
        "getter-return"                   : [
            "error",
            {
                "allowImplicit": true
            }
        ],
        "func-call-spacing"               : [
            "error",
            "never"
        ],
        "func-names"                      : [
            "error",
            "as-needed",
            {
                "generators": "as-needed"
            }
        ],
        "func-name-matching"              : [
            "error",
            "always",
            {
                "considerPropertyDescriptor"  : true,
                "includeCommonJSModuleExports": true
            }
        ],
        "func-style"                      : [
            "off",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-call-argument-newline"  : [
            "error",
            "consistent"
        ],
        "function-paren-newline"          : [
            "error",
            "multiline-arguments"
        ],
        "id-blacklist"                    : [
            "off"
        ],
        "id-length"                       : [
            "off",
            {
                "min"       : 2,
                "max"       : 10,
                "properties": "always",
                "exceptions": []
            }
        ],
        "id-match"                        : [
            "off",
            "^[a-z]+([A-Z][a-z]+)*$",
            {
                "properties"         : false,
                "onlyDeclarations"   : false,
                "ignoreDestructuring": false
            }
        ],
        "implicit-arrow-linebreak"        : [
            "error",
            "beside"
        ],
        "indent"                          : [
            "error",
            4,
            {
                "SwitchCase"            : 1,
                "VariableDeclarator"    : {
                    "var"  : "first",
                    "let"  : "first",
                    "const": "first"
                },
                "outerIIFEBody"         : 1,
                "MemberExpression"      : 1,
                "FunctionDeclaration"   : {
                    "parameters": "first",
                    "body"      : 1
                },
                "FunctionExpression"    : {
                    "parameters": "first",
                    "body"      : 1
                },
                "CallExpression"        : {
                    "arguments": "first"
                },
                "ArrayExpression"       : 1,
                "ObjectExpression"      : 1,
                "ImportDeclaration"     : 1,
                "flatTernaryExpressions": false,
                "ignoredNodes"          : [],
                "ignoreComments"        : false
            }
        ],
        "jsx-quotes"                      : [
            "error",
            "prefer-double"
        ],
        "key-spacing"                     : [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon" : true,
                    "mode"       : "strict"
                },
                "multiLine" : {
                    "beforeColon": false,
                    "afterColon" : true,
                    "mode"       : "strict"
                },
                "align"     : {
                    "beforeColon": false,
                    "afterColon" : true,
                    "on"         : "colon",
                    "mode"       : "strict"
                }
            }
        ],
        "keyword-spacing"                 : [
            "error",
            {
                "before"   : true,
                "after"    : true,
                "overrides": {}
            }
        ],
        "line-comment-position"           : [
            "error",
            {
                "position"            : "above",
                "applyDefaultPatterns": false
            }
        ],
        "linebreak-style"                 : [
            "error",
            "unix"
        ],
        "lines-around-comment"            : [
            "error",
            {
                "beforeBlockComment"        : true,
                "afterBlockComment"         : false,
                "beforeLineComment"         : true,
                "afterLineComment"          : false,
                "allowBlockStart"           : true,
                "allowBlockEnd"             : false,
                "allowClassStart"           : false,
                "allowClassEnd"             : true,
                "allowObjectStart"          : true,
                "allowObjectEnd"            : false,
                "allowArrayStart"           : true,
                "allowArrayEnd"             : false,
                "applyDefaultIgnorePatterns": true
            }
        ],
        "lines-between-class-members"     : [
            "error",
            "always",
            {
                "exceptAfterSingleLine": false

            }
        ],
        "max-classes-per-file"            : [
            "error",
            1
        ],
        "max-depth"                       : [
            "warn",
            {
                "max": 4
            }
        ],
        "max-len"                         : [
            "warn",
            {
                "code"                  : 120,
                "comments"              : 120,
                "tabWidth"              : 4,
                "ignoreComments"        : false,
                "ignoreTrailingComments": false,
                "ignoreUrls"            : true,
                "ignorePattern"         : "",
                "ignoreStrings"         : true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals"  : false
            }
        ],
        "max-lines"                       : [
            "warn",
            {
                "max"           : 300,
                "skipBlankLines": true,
                "skipComments"  : true
            }
        ],
        "max-lines-per-function"          : [
            "warn",
            {
                "max"           : 50,
                "skipBlankLines": true,
                "skipComments"  : true,
                "IIFEs"         : true
            }
        ],
        "max-nested-callbacks"            : [
            "warn",
            {
                "max": 10
            }
        ],
        "max-params"                      : [
            "off",
            {
                "max": 3
            }
        ],
        "max-statements"                  : [
            "off",
            {
                "max": 10
            },
            {
                "ignoreTopLevelFunctions": true
            }
        ],
        "max-statements-per-line"         : [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-comment-style"         : [
            "error",
            "separate-lines"
        ],
        "multiline-ternary"               : [
            "off",
            "always-multiline"
        ],
        "new-cap"                         : [
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
        "new-parens"                      : [
            "error",
            "always"
        ],
        "newline-per-chained-call"        : [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-array-constructor"            : "error",
        "no-bitwise"                      : [
            "off",
            {
                "allow"    : [],
                "int32Hint": false
            }
        ],
        "no-buffer-constructor"           : "error",
        "no-continue"                     : "off",
        "no-inline-comments"              : "warn",
        "no-lonely-if"                    : "error",
        "no-mixed-operators"              : [
            "error",
            {
                "allowSamePrecedence": true
            }
        ],
        "no-mixed-spaces-and-tabs"        : "error",
        "no-multiple-empty-lines"         : [
            "error",
            {
                "max"   : 2,
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition"            : "warn",
        "no-nested-ternary"               : "error",
        "no-new-object"                   : "error",
        "no-plusplus"                     : [
            "off",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax"            : [
            "error"
        ],
        "no-tabs"                         : [
            "error",
            {
                "allowIndentationTabs": false
            }
        ],
        "no-ternary"                      : "off",
        "no-trailing-spaces"              : [
            "error",
            {
                "skipBlankLines": false,
                "ignoreComments": false
            }
        ],
        "no-underscore-dangle"            : [
            "off",
            {
                "allow"                    : [],
                "allowAfterThis"           : false,
                "allowAfterSuper"          : false,
                "allowAfterThisConstructor": false,
                "enforceInMethodNames"     : false
            }
        ],
        "no-unneeded-ternary"             : [
            "error",
            {
                "defaultAssignment": true
            }
        ],
        "no-whitespace-before-property"   : "error",
        "object-curly-newline"            : [
            "warn",
            {
                "ObjectExpression" : {
                    "multiline"    : true,
                    "minProperties": 2,
                    "consistent"   : true
                },
                "ObjectPattern"    : {
                    "multiline"    : true,
                    "minProperties": 2,
                    "consistent"   : true
                },
                "ImportDeclaration": {
                    "multiline"    : false,
                    "minProperties": 2,
                    "consistent"   : true
                },
                "ExportDeclaration": {
                    "multiline"    : false,
                    "minProperties": 2,
                    "consistent"   : true
                }
            }
        ],
        "object-curly-spacing"            : [
            "error",
            "never",
            {
                "objectsInObjects": false,
                "arraysInObjects" : false
            }
        ],
        "object-property-newline"         : [
            "warn",
            {
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "one-var-declaration-per-line"    : [
            "error",
            "always"
        ],
        "one-var"                         : [
            "error",
            {
                "var"             : "never",
                "let"             : "never",
                "const"           : "never",
                "separateRequires": true
            }
        ],
        "operator-assignment"             : [
            "error",
            "always"
        ],
        "operator-linebreak"              : [
            "error",
            "after",
            {
                "overrides": {
                    "?": "ignore",
                    ":": "ignore"
                }
            }
        ],
        "padded-blocks"                   : [
            "error",
            {
                "blocks"  : "never",
                "switches": "never",
                "classes" : "never"
            },
            {
                "allowSingleLineBlocks": false
            }
        ],
        "quote-props"                     : [
            "error",
            "as-needed",
            {
                "keywords"   : false,
                "unnecessary": true,
                "numbers"    : false
            }
        ],
        "quotes"                          : [
            "error",
            "single",
            {
                "avoidEscape"          : true,
                "allowTemplateLiterals": true
            }
        ],
        "require-unicode-regexp"          : "error",
        "semi-spacing"                    : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ],
        "semi-style"                      : [
            "error",
            "last"
        ],
        "semi"                            : [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": false
            }
        ],
        "sort-keys"                       : [
            "off",
            "asc",
            {
                "caseSensitive": true,
                "natural"      : false,
                "minKeys"      : 2
            }
        ],
        "sort-vars"                       : [
            "warn",
            {
                "ignoreCase": false
            }
        ],
        "space-before-blocks"             : [
            "error",
            {
                "functions": "always",
                "keywords" : "always",
                "classes"  : "always"
            }
        ],
        "space-before-function-paren"     : [
            "error",
            {
                "anonymous" : "always",
                "named"     : "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens"                 : [
            "error",
            "never",
            {
                "exceptions": []
            }
        ],
        "space-infix-ops"                 : [
            "error",
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops"                 : [
            "error",
            {
                "words"    : true,
                "nonwords" : false,
                "overrides": {}
            }
        ],
        "spaced-comment"                  : [
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
        "switch-colon-spacing"            : [
            "error",
            {
                "after" : true,
                "before": false
            }
        ],
        "unicode-bom"                     : [
            "error",
            "never"
        ],
        "wrap-regex"                      : "off",
        "arrow-body-style"                : [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": false
            }
        ],
        "arrow-parens"                    : [
            "error",
            "always"
        ],
        "arrow-spacing"                   : [
            "error",
            {
                "before": true,
                "after" : true
            }
        ],
        "constructor-super"               : "error",
        "generator-star-spacing"          : [
            "error",
            {
                "before"   : true,
                "after"    : false,
                "named"    : {
                    "before": true,
                    "after" : false
                },
                "anonymous": {
                    "before": true,
                    "after" : false
                },
                "method"   : {
                    "before": true,
                    "after" : false
                }
            }
        ],
        "no-class-assign"                 : "error",
        "no-compare-neg-zero"             : "error",
        "no-confusing-arrow"              : [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-const-assign"                 : "error",
        "no-dupe-class-members"           : "error",
        "no-dupe-else-if"                 : "error",
        "no-duplicate-imports"            : [
            "error",
            {
                "includeExports": true
            }
        ],
        "no-new-symbol"                   : "error",
        "no-restricted-imports"           : [
            "error",
            {
                "paths"   : [],
                "patterns": []
            }
        ],
        "no-this-before-super"            : "error",
        "no-useless-computed-key"         : "error",
        "no-useless-constructor"          : "error",
        "no-useless-rename"               : [
            "error",
            {
                "ignoreImport"       : false,
                "ignoreExport"       : false,
                "ignoreDestructuring": false
            }
        ],
        "no-useless-return"               : "error",
        "no-var"                          : "error",
        "object-shorthand"                : [
            "error",
            "always",
            {
                "avoidQuotes"              : true,
                "ignoreConstructors"       : false,
                "avoidExplicitReturnArrows": true
            }
        ],
        "padding-line-between-statements" : [
            "error",
            {
                "blankLine": "always",
                "prev"     : "directive",
                "next"     : "*"
            },
            {
                "blankLine": "any",
                "prev"     : "directive",
                "next"     : "directive"
            },
            {
                "blankLine": "always",
                "prev"     : [
                    "const",
                    "let",
                    "var"
                ],
                "next"     : "*"
            },
            {
                "blankLine": "any",
                "prev"     : [
                    "const",
                    "let",
                    "var"
                ],
                "next"     : [
                    "const",
                    "let",
                    "var"
                ]
            },
            {
                "blankLine": "always",
                "prev"     : "*",
                "next"     : "return"
            }
        ],
        "prefer-arrow-callback"           : [
            "error",
            {
                "allowNamedFunctions": false,
                "allowUnboundThis"   : true
            }
        ],
        "prefer-const"                    : [
            "warn",
            {
                "destructuring"         : "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "prefer-destructuring"            : [
            "warn",
            {
                "VariableDeclarator"  : {
                    "array" : true,
                    "object": true
                },
                "AssignmentExpression": {
                    "array" : true,
                    "object": true
                }
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "prefer-exponentiation-operator"  : "error",
        "prefer-named-capture-group"      : "warn",
        "prefer-numeric-literals"         : "error",
        "prefer-object-spread"            : "error",
        "prefer-promise-reject-errors"    : [
            "warn",
            {
                "allowEmptyReject": true
            }
        ],
        "prefer-regex-literals"           : "error",
        "prefer-rest-params"              : "error",
        "prefer-spread"                   : "error",
        "prefer-template"                 : "warn",
        "require-yield"                   : "error",
        "rest-spread-spacing"             : [
            "error",
            "never"
        ],
        "sort-imports"                    : [
            "warn",
            {
                "ignoreCase"           : false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort"     : false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "symbol-description"              : "error",
        "template-curly-spacing"          : [
            "error",
            "never"
        ],
        "template-tag-spacing"            : [
            "error",
            // "never" or "always"
            "never"
        ],
        "yield-star-spacing"              : [
            "error",
            {
                "before": false,
                "after" : true
            }
        ]
    },
    "settings": {}
};
