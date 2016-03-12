/**
 * Created by Tanxu123 on 2016/3/5.
 */

var num = 1;
exports.num=num;
console.log('aaaa'); // 会返回exports里的东西，还会执行里面的console
exports.add = function (a,b) {
  return a+b;
};