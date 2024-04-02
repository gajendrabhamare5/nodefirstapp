var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
var data;

fs.readFile('sample.txt',(err,data)=>{
    if(err){
        data = 'error while reading the file';
    }else {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end;
    }
});

});

server.listen(5000,()=>{
    console.log('Started...');
})
console.log('working');

const time = new Date().getFullYear()
console.log(time);
