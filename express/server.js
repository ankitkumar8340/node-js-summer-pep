import express from 'express'
const PORT = 3000;
const app = express();


// put--> fro changing whole data
//patch --> for changing small thing in data
app.get('/', (req, res)=>{
    res.send('hello world from GET');
});

app.post('/',(req, res)=>{
    res.send("Hello world from POST");
} );

app.patch('/', (req, res)=>{
    res.send("Hello world from path");
});

app.put('/', (req, res)=>{
    res.send("Hello from PUT");
});

app.delete('/', (req, res)=>{
    res.send("Hello from Delete");
});

app.listen(PORT, ()=>{
    console.log("Server is running")
})



