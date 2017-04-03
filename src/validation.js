const defaultData = {
    value:    '',
    messages: {},
    methods:  []
};

export default function (_data) {
    const params = {
        ...defaultData,
        ..._data
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const method of params.methods) {
        if (method(params.value)) {
            if (params.messages[method.name]) {
                // return error message
                return params.messages[method.name];
            }
            // TODO: check NODE_ENV
            window.console.warn(`Validation: Not message for the "${ method.name }" method!`);
            return method.name;
        }
    }
    return false;
}
