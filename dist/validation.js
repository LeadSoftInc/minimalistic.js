'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_data) {
    var params = _extends({}, defaultData, _data);

    // eslint-disable-next-line no-restricted-syntax
    for (var method in params.methods) {
        if (Object.prototype.hasOwnProperty.call(params.methods, method)) {
            var checkMethod = params.methods[method];

            if (checkMethod(params.value)) {
                if (params.messages[method]) {
                    // return error message
                    return params.messages[method];
                }
                window.console.warn('Minimalistic.js: Not message for the "' + method + '" method!');
                return method;
            }
        }
    }

    return false;
};

var defaultData = {
    value: '',
    messages: {},
    methods: {}
};
//# sourceMappingURL=validation.js.map