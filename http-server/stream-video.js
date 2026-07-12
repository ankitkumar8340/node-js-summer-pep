import {createServer} from 'http';
import { fileURLToPath } from 'url';
import fs, { createReadStream, statSync } from 'fs';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname= dirname(__filename);

const server = createServer(((req, res)=>{
    if(req.url==='/'){
        const htmlPath = join(__dirname, 'public', 'index.html');
        createReadStream(htmlPath).pipe(res);
        return;
    }
    if (req.url === '/videos') {
        const videopath = join(__dirname, 'videos', 'video.mp4');
        const stat = statSync(videopath);
        const fileSize= stat.size;
        const range = req.headers.range

        if(!range){
            res.writeHead(400);
            res.end("Range is required");
            return;
        }

        const CHUNK_SIZE = 10 ** 6   //1 MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start+CHUNK_SIZE, fileSize-1);
        const contentLength= end-start+1;
        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4'
        });

        const stream = createReadStream(videopath, { start, end });
        stream.pipe(res);
        return;

    }
    res.writeHead(404);
    res.end("404 not found");
}))

server.listen(3000, '127.0.0.1', ()=>{
    console.log("Node App is running on 127.0.0.1:3000")
})

















