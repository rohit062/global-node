const global = require('./lib/global');
global.setProperty('key',{a:1,b:2});
global.setProperty('key1',{a:1,b:2});

global.setProperty('key2',{a:1,b:2});

global.setProperty('key3',{a:1,b:2});

console.log(global.deleteProperty('key11'));


