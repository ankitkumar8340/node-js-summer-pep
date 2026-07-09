import { createServer } from "http";

const server = createServer((req, res)=>{
    if(req.url=='/data'){
        const data={
            Name:'Ankit kumar',
            Section:'K23PG',
            Roll:'123222'
        }
        res.setHeader("Content-Type", "application/json");
        res.write("Data: ");
        res.end(JSON.stringify(data));
    }else{
        // res.setHeader(400);
        res.end('Server error');
    }
})

server.listen(3000, ()=>{
    console.log("server is running");
})

