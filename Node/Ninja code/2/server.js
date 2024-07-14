const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    console.log("happening");
    res.setHeader('Content-Type','text/html');
    res.setHeader('Hello','wprld');

    res.write('<h1>HELLO NIGGAS</h1>')
})

server.listen(3000,"localhost",()=>{
    console.log("listning");
})
