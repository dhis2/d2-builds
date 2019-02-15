'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _check = require('./check');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchemaTypes = function () {
    function SchemaTypes() {
        _classCallCheck(this, SchemaTypes);
    }

    _createClass(SchemaTypes, [{
        key: 'getTypes',
        value: function getTypes() {
            // eslint-disable-line class-methods-use-this
            return ['TEXT', 'NUMBER', 'INTEGER', 'BOOLEAN', 'EMAIL', 'PASSWORD', 'URL', 'PHONENUMBER', 'GEOLOCATION', // TODO: Geo location could be an advanced type of 2 numbers / strings?
            'COLOR', 'COMPLEX', 'COLLECTION', 'REFERENCE', 'DATE', 'COMPLEX', 'IDENTIFIER', 'CONSTANT'];
        }
    }, {
        key: 'typeLookup',
        value: function typeLookup(propertyType) {
            if (this.getTypes().indexOf(propertyType) >= 0 && (0, _check.isString)(propertyType)) {
                return propertyType;
            }

            return (0, _utils.throwError)(['Type from schema "', propertyType, '" not found available type list.'].join(''));
        }
    }]);

    return SchemaTypes;
}();

exports.default = new SchemaTypes();
//# sourceMappingURL=SchemaTypes.js.map