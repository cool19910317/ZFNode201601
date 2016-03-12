/**
 * Created by Tanxu123 on 2016/3/5.
 */

// Buffer 类似于数组
// Buffer 里面只能放字节 范围0-255 256个数
// 定义Buffer => new Buffer(size);
  // 指定大小创建
var buffer = new Buffer(1);
buffer[0] = 10;
console.log(buffer);


  // 字符串创建Buffer
console.log(new Buffer('珠'));

  // 通过数组创建爱你
console.log(new Buffer([0x01,2,3])); // []里只能放数字 0-255 或者10进制表示

