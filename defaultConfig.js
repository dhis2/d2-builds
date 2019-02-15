'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * List of modelDefinition names that should not allow create. Even when their schema authorities allows the user
 * to create them, the user should not be allowed to create these objects for some business logic reason.
 *
 * @private
 * @type {Set<string>}
 * @readonly
 */
var noCreateAllowedFor = exports.noCreateAllowedFor = new Set([
// Creating categoryOptionCombos is not allowed because they are generated by the backend.
'categoryOptionCombo']);

/**
 * Default options to be used when running the `d2.init` function.
 */
exports.default = {
    baseUrl: '/api',
    i18n: {
        sources: new Set(),
        strings: new Set()
    }
};
//# sourceMappingURL=defaultConfig.js.map