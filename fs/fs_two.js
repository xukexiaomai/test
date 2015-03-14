//操作目录
var fs = require('fs');
//创建目录
fs.mkdir('./testClone');
//查看目录文件
fs.readdir('./test',function(err,files){
    console.log(files)
});

fs.stat('./test',function(err,stat){
    console.log(stat)
    //stat.atime
    //stat.mtime
    //stat.ctime
});
//文件是否存在
//fs.exists(path,callback)

//文件夹绝对路径
fs.realpath('./test',function(err,path){
    console.log(path)
});

//修改事件，访问时间 修改时间
//fs.utimes(path, 访问时间,修改时间,callback)

//修改权限 fs.chomd
//重命名  fs.rename

//fs.truncate(path,size,callback) 截断文件

//var path = './test/testTwo'
//fs.writeFile(path,new Buffer(102400))

// 文件有变化后就返回
fs.watchFile('./test/rename.txt',function(pre,next){
    if(Date.parse(pre.mtime) != Date.parse(next.mtime)){
        fs.rename('./test/rename.txt','./test/testTwo',function(err){
            console.log('rename')
        })
    }
})
