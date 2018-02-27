'use strict';

module.exports = {
    "extends" : [
        "plugin:flowtype/recommended"
    ],
    "plugins" : [
        "flowtype"
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
