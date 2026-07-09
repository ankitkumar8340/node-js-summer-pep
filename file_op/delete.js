import {error} from 'console';
import {appendFile, appendFileSync, unlink} from 'fs';

unlink('logs.txt', (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("File deleted");
    }
})