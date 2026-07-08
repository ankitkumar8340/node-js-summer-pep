import {createServer} from 'node:http';
import {add} from './function.js'


const server = createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Hello world");
})

server.listen(3000, '127.0.0.1' ,()=> {console.log("server is running")});

const result = add(2,3);
console.log(result)


