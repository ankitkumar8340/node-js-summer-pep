import {error} from 'console';
import { appendFile,writeFile, appendFileSync } from "fs";


//add in file
appendFile('logs.txt', "this is a new Text \n", (error)=>{
    
    if(error){
        console.log(error);
    }else{
    console.log("Text written");
    }
})


//overwrite 
writeFile('logs.txt', 'this is written by writefile\n', (error)=>{
    if(error){
        console.log(error);
    }else{
    console.log("Text written");
    }
})

































