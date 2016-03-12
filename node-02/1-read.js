/**
 * Created by Tanxu123 on 2016/3/6.
 */

var fs = require('fs');
function callback(data,err){
  if(err){
    console.error(err)
  }else{
    console.log(data);
  }
}
fs.readFile('./index.txt','utf8',callback);
console.log(data);
console.log('b');
console.log('c');


/**
 * 异步方法
 * 1.异步方法需要把毁掉参数传入
 * 2.回掉函数会在同步方法执行完毕后才执行异步回掉
 * 3.异步方法不能阻塞主线程，不会影响后续代码的执行
 */