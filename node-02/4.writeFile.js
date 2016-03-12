/**
 * Created by Tanxu123 on 2016/3/6.
 */
var fs = require('fs');

/**
 * 回掉函数里的 err data 是由fs.readFile(模块)决定的
 *
 */

// 以同步的方式向硬盘的文件里写数据
// fs.writeFileSync(filename, data, [options])
fs.writeFileSync('./write.txt', '珠峰培训');

// 以异步的方式向硬盘的文件里写数据
// fs.writeFile(filename, data, [options], callback)
// flag 是表示要对此文件做何种类型的操作
// w => 清空并写入
// a => 在原有基础上追加
fs.writeFile('writeFile','珠峰peixun',{flag:'w'},function(err){
  console.log(arguments); // '0' null 只有一个参数
  if(err){
    console.log(err)
  }else{
    console.log('success');
  }
});

fs.appendFile('./writeFile','node');