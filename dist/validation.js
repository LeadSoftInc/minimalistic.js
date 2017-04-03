'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_data) {
    var params = _extends({}, defaultData, _data);

    // eslint-disable-next-line no-restricted-syntax
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = params.methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var method = _step.value;

            if (method(params.value)) {
                if (params.messages[method.name]) {
                    // return error message
                    return params.messages[method.name];
                }
                window.console.warn('Validation: Not message for the "' + method.name + '" method!');
                return method.name;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
};

var defaultData = {
    value: '',
    messages: {},
    methods: []
};
//# sourceMappingURL=validation.js.map