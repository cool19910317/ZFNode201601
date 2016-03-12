/**
 * Created by Tanxu123 on 2016/3/5.
 */




// 原理

function math(){
  var module = {exoirts:{}};
  var exports = {};
  //----------
  var num = 1;

  // 解决
  exports.num = num;

  exports = function(){} // 没影响，最后return的module.exports
  //----------
  return module.exports;
}

var m = math();

console.log(m.num);
console.log(m);