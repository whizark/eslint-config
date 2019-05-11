'use strict';

module.exports = {
    "extends": [
        "plugin:react/all"
    ],
    "plugins": [
        "react"
    ],
    "rules"  : {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx",
                    ".js",
                    ".mjs"
                ]
            }
        ]
    }
};
