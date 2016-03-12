/**
 * Created by Tanxu123 on 2016/3/5.
 */


// file system
// 加载fs核心模块  是node自带的模块   是内置模块
var fs = require('fs');
fs.readFile('./index.txt');

// require('./math.js');  ./ 我们自己写的模块，就是文件模块


// npm安装的模块  第三方的模块
// npm install -g package name 全局安装npm插件

// 本地安装 npm install package name

var mime = require('mime');
console.log(mime);