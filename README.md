# minimalistic.js

### Example validation
```javascript
import { validation, methods } from 'minimalistic-js';

const loginError = validation({
    value: 'admin', // input value
    methods: [ methods.required ], // check methods
    messages: { // error messages
        required: 'The field is required'
    }
});

if (loginError) {
    alert(loginError);
}
```

### Check methods
https://github.com/kuzmenko1256/minimalistic.js/blob/master/src/methods.js