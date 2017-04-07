# minimalistic.js

### Installation
To install the stable version:
```
npm install --save minimalistic-js
```

### Example validation
#### Check string
```javascript
import { validation, methods } from 'minimalistic-js';

const loginError = validation({
    value: 'admin', // input value
    methods: { // check methods
        required: methods.required,
        email: methods.isEmail
    },
    messages: { // error messages
        required: 'The field is required',
        email: 'The email address entered is invalid'
    }
});

if (loginError) {
    console.warn(loginError);
}
```

#### Check file
```javascript
import { validation, methods } from 'minimalistic-js';

const fileError = validation({
    value: File, // your file
    methods: { // check methods
        required: methods.required,
        maxFileSize: methods.maxFileSize(100000)
    },
    messages: { // error messages
        required: 'The field is required',
        maxFileSize: 'The maximum file size is 100kb'
    }
});

if (fileError) {
    console.warn(fileError);
}
```

#### Example ES5 Node.js
```javascript
var minimalisticJs = require("minimalistic-js");

var fieldError = minimalisticJs.validation({
    value: '',
    methods: { // check methods
        required: minimalisticJs.methods.required
    },
    messages: { // error messages
        required: 'The field is required'
    }
});

if (fieldError) {
    console.warn(fieldError);
}
```

### Check methods
https://github.com/LeadSoftInc/minimalistic.js/blob/master/src/methods.js

### Create custom check method
```javascript
import { validation } from 'minimalistic-js';

// custom check method
function customMethod(value) {
    return value.length === 0;
}

const fieldError = validation({
    value: '', // your value
    methods: { // check methods
        custom: customMethod
    },
    messages: { // error messages
        custom: 'Custom error message'
    }
});

if (fieldError) {
    console.warn(fieldError);
}
```