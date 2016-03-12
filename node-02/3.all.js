/**
 * Created by Tanxu123 on 2016/3/6.
 */

/*var fs = require('fs');
var name = fs.readFileSync('./name.txt','utf8');
var age = fs.readFileSync('./age.txt','utf8');

console.log(name,age);*/


// 1.回掉函数潜逃实现多个异步操作完成之后执行的回掉
/**
 * 缺点
 * 需要的时间常，m+n
 * 代码可读性差
 */
/*var fs = require('fs');
fs.readFile('./name.txt','utf8',function(err,name){
  fs.readFile('./age.txt','utf8',function(err,age){
    console.log(name,age);
  });
});*/


// 计数器的做法
var fs = require('fs');
var person = {};
function show(){
  if(Object.keys(person).length==2){
    console.log(person);
  }
}
fs.readFile('./name.txt','utf8',function(err,name){
  person.name=name;
  show();
});

fs.readFile('./age.txt','utf8',function(err,age){
  person.age=age;
  show();
});

