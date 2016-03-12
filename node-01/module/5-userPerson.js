/**
 * Created by Tanxu123 on 2016/3/5.
 */


var Person = require('./4-person');
var p = new Person('zfpx');
console.log(p);

console.log(require.cache); // 缓存了几个模块