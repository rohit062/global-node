[![Build Status](https://travis-ci.org/rohit062/global-js.svg?branch=master)](https://travis-ci.org/rohit062/global-js) [![Coverage Status](https://coveralls.io/repos/github/rohit062/global-js/badge.svg?branch=master)](https://coveralls.io/github/rohit062/global-js?branch=master)


# Global-js 🌍
This module helps in solving the problem of managing global variable in nodejs application. Set the global variable using globaljs class and get it anywhere in application using the same class. It helps in writing clean and maintainable code.

## Install instruction
Below npm v5.0.0 

``` bash
 $ npm install global-js --save
 ```

Above v5.0.0

``` bash
 $ npm install global-js 
```

## Usage
Require the module 

``` js 
const Globaljs = require('global-js');
```

Basic add and get properties

``` js
/* 
  in app.js 
  make a instance of globaljs by just requiring the module
  and set some properties
*/

const Globaljs = require('global-js');
Globaljs.setProperty('key', 'value');
const val = Globaljs.getValue('key');
console.log(val) // -> value;

/*
  now in some other file just get the variable by requiring the module and calling getValue('key'); function
*/

const val = Globaljs.getValue('key');
console.log(val) // -> value;

```

### ``` Globaljs.getValue(key) ```
Get the value of the property.

```js
const val = Globaljs.getValue(key);
console.log(val)
```

### ``` Globaljs.deleteProperty(key) ```
Delete the property.

```js
// if property doesn't exist it will throw an error
Globaljs.deleteProperty(key);
```

### ``` Globaljs.listProperty() ```
List all the properties.

```js
Globaljs.setProperty('key', 'value');
Globaljs.setProperty('key2', 'value2');
const lst = Globaljs.listProperty() //  returns and array
console.log(lst) // [ key, key2 ];
```

### ``` Globaljs.isPropertyExist(key) ```
Check if property exist.

```js
Globaljs.setProperty('key', 'value');
const isExist = Globaljs.isPropertyExist('key');
console.log(isExist) // true;
isExist = Globaljs.isPropertyExist('nokey');
console.log(isExist) // false;
```

### ``` Globaljs.emptyAll() ```
Clear all the global properties

```js
Globaljs.setProperty('key', 'value');Globaljs.emptyAll()
const lst = Globaljs.listProperty() //  returns and array
console.log(lst) // [ ]; // removed all the property from the global object
```

### ``` Fetch properties from .json file ```
You can get the default global variables from the file by setting the environment variable **GLOBAL_CONFIG_FILE**='/pathtofile' this must be the absolute path to the file and the file must be a valid JSON otherwise it will throw and error.

## Test
``` bash
 $ npm install
 $ npm run test
 $ npm run test:coverage // for coverage
```
* **Test 1:** File exist
* **Test 2:** File not exists
* **Test 3:** Check Property Exists
* **Test 4:** Get Property
* **Test 5:** Get Property After Set
* **Test 6:** Delete Property After Set
* **Test 7:** Property Don't Exist
* **Test 8:** Property Do Exist
* **Test 9:** List Property
### Tests After Clearing all Properties
* **Test 10:** Get Property After Set
* **Test 11:** Get After Delete Property
* **Test 12:** Delete Non existing Property
* **Test 13:** Property Don't Exist
* **Test 14:** Property Do Exist
* **Test 15:** List Property


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)