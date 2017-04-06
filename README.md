# minimalistic.js

### Example validation
```javascript
import { validation, methods } from 'minimalistic-js';

const loginError = validation({
    value: 'admin', // input value
    methods: { // check methods
        required: methods.required
    },
    messages: { // error messages
        required: 'The field is required'
    }
});

if (loginError) {
    alert(loginError);
}
```

### Check methods
https://github.com/LeadSoftInc/minimalistic.js/blob/master/src/methods.js