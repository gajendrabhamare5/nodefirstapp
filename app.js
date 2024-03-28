/* const { readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

writeFileSync('./content/result-sync.txt',`here is the result :  ${first}, ${second}`,{flag:'a'}) */

// http server

/* const http = require('http');
const server = http.createServer((req,res)=>{
     console.log(req)
    res.write('Welcome to our home page')
    res.end()

if (req.url === '/') {
    res.end('Welcome to our page');
}
else if (req.url === '/about') {
    res.end('here is our history... ');
}else{
    res.writeHead(404, {'Content-Type': 'text/html'});
req.end(`
<1>OOPS!!</h1>
<p>we cant see tot he page you are looking for</p>
<a href="/">back home</a>
`);
}
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
}); */


// npm start

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)