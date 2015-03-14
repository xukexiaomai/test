//读取文件模块
var fs = require('fs');
//var data = fs.readFileSync('./test/index.html');//同步读取,一般只用在读取配置文件
//异步读取
//fs.readFile('./test/testOne','utf8',function(err,data){
//    if(err){
//        console.error(err)
//    }else{
//        console.log('异步读取文件testOne')
//    }
//})
//fs.readFile('./test/testTwo','utf8',function(err,data){
//    if(err){
//        console.error(err)
//    }else{
//        console.log('异步读取文件testTwo')
//    }
//})

//option:flag: r read/ write/ a append
//       mode: 0777   1.执行 2.写入  4.读取  可相加
//       encoding:编码
//fs.writeFile(filename,data,options)
//fs.writeFile('./test/writeTestOne','自动创建的',{flat:'w',mode:'0666',encoding:'utf8'},function(err){
//    if(err)console.error(err)
//})
//读取图片并创建到另外的地方
//fs.writeFile('./testPic.jpg','base64',function(err,data){
//    fs.writeFile('./test/copyTest.jpg',data,{flat:'w',mode:'0666',encoding:'base64'},function(err){
//        if(err)console.error(err)
//        console.log('copy success');
//    })
//});
//fs.open 打开文件并返回文件位置fd
//fs.read 读取文件
fs.open('./test/testTwo','r',function(err,fd){
    var buf = new Buffer('小可可')
    fs.read(fd,buf,0,3,0,function(err,bytesRead,buffer){
        if(err){
            console.error(err)
        }else{
            console.log(bytesRead)//实际读取到的字节数
            console.log(buffer.toString());
        }
    })
});

//fs.write 写文件
fs.open('./test/testTwo','w',0666,function(err,fd){
    var buf = new Buffer('小麦子');
    fs.write(fd,buf,3,6,0,function(err,written,buf1){
        if(err)console.error(err)
        console.log(buf1.toString())
        fs.write(fd,buf,0,3,6,function(err,written1,buf2){
            //确保读写完毕
            fs.fsync(fd,function(){
                //关闭文件
                fs.close(fd);
            })
        })
    })
})