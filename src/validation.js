const defaultData = {
    value:    '',
    messages: {},
    methods:  {}
};

export default function (_data) {
    const params = {
        ...defaultData,
        ..._data
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const method in params.methods) {
        if (Object.prototype.hasOwnProperty.call(params.methods, method)) {
            const checkMethod = params.methods[method];

            if (checkMethod(params.value)) {
                if (params.messages[method]) {
                    // return error message
                    return params.messages[method];
                }
                window.console.warn(`Minimalistic.js: Not message for the "${ method }" method!`);
                return method;
            }
        }
    }

    return false;
}
