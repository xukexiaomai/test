//操作二进制文件
var buf1 = new Buffer(12); //随机创建
buf1.fill(10); //填充
console.log(buf1)

var buf2 = new Buffer([1,3,4]);
console.log(buf2)

//汉字占3个字节 拼音占1个字节
var buf3 = new Buffer('小a麦麦麦麦麦','utf8');
buf3.write('珂珂',4,5)
console.log(buf3.toString())

var buf4 = new Buffer(1);
console.log(buf4[0]);

//buf.slice 与 string.slice不同   buf.slice是指针指向位置，改变后buf也会跟着变
//Buffer.concat([buf1,buf2],length) 合并buffer
//Buffer.isBuffer() 判断是不是buffer
//Buffer.byteLength('') 判断长度
//Buffer.isEncoding('') 判断是否支持该类型编码