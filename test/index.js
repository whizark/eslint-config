'use strict';

const validator = require('eslint/lib/shared/config-validator');
const config    = require('../index');

let exitCode = 0;

try {
    validator.validate(config, 'index.js');
} catch (err) {
    console.error(err.message);

    exitCode = 1;
}

process.exitCode = exitCode;
