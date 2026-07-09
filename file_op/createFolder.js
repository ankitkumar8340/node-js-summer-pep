import { mkdir,  rmdir } from "fs";
import {error} from 'console';


// mkdir('public', (error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Folder created");
//     }
// })

// mkdir('public/video', (error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Folder created");
//     }
// })

rmdir('public', (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`folder deleted`)
    }
})

rm('public', {recursive: true, force:true});
// recursive: true --> remove folder contents too
 //force: true --> avoids errors if the path does not exist

 rename()










