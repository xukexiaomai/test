//dizhi
var path = require('path');
var fs = require('fs');

//标准化路径
console.log(path.normalize('.//a////b/c/../d'))

//拼接地址
console.log(path.join(__dirname,'a','b','c','cc'))
//获取本地默认分隔符
console.log(path.sep)
//delimiter 环境变量分隔符
console.log(path.delimiter)

//resolve 拼路径
console.log(path.resolve('b'))

//path.dirname  文件所在路径
//path.basename 文件名

console.log(path.basename('path_one.js'))
