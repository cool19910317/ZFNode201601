/**
 * Created by Tanxu123 on 2016/3/5.
 */

// 字符串转buffer
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);



// buffer转字符串
// buf.toString([encoding],[,start[,end]]);

// 一个中文占3个buffer字节 02 e1 35
console.log(buffer);
console.log(buffer.toString('utf8',3,6));



