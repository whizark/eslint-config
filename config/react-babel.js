'use strict';

const configs = [
    "./env/default.js",
    "./env/browser.js",
    "./version/es2017.js",
    "./module/ecmascript.js",
    "./parser/jsx.js",
    "./rules/strict.js"
];

const plugins = [
    "./plugins/react.js"
];

/**
 * Checks whether the specified plugins are installed.
 *
 * @param {string[]} plugins A list of plugin names to check.
 *
 * @returns {boolean} True if all plugins are installed, false otherwise.
 */
function pluginsInstalled(plugins) {
    for (const plugin of plugins) {
        try {
            require.resolve(`eslint-plugin-${plugin}`);
        } catch (err) {
            return false;
        }
    }

    return true;
}

for (const plugin of plugins) {
    const pluginConfig = require(plugin);

    if (typeof pluginConfig.plugins === 'undefined') {
        continue;
    }

    if (pluginsInstalled(pluginConfig.plugins)) {
        configs.push(plugin);
    }
}

module.exports = {
    "extends": configs
};
