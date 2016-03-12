/**
 * Created by Tanxu123 on 2016/3/5.
 */


var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
var buf3 = new Buffer('培');
var buf4 = new Buffer('训');

// 合并 Buffer.concat(list[,totallength]);

var all =Buffer.concat([buf1,buf2,buf3,buf4],12);  // 12代表三个中文汉字  一个汉字占3个
var s = all.slice(9,13);
console.log(s.toString());
console.log( all.toString('utf8') );


// 辅助 Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend);
var buffers = new Buffer(12);

buf1.copy(buffers,0,0,3);
buf2.copy(buffers,3,0,3);
buf3.copy(buffers,6,0,3);
buf4.copy(buffers,9,0,3);

console.log(buffers.toString('utf8'));


// Buffer.isBuffer 判断是否是Buffer
// 获取字节的长度 Buffer.byteLength(buffer);
console.log(buffers.byteLength);
console.log(Buffer.byteLength('珠峰培训aa'));










