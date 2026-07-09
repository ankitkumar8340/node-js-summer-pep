import {error} from 'console'
import {rename, existsSync} from 'fs';

rename('logs.txt', 'password.txt', (error)=>{
    if(error){
    console.log("ERROR: ", error)
    }
})

//checking if a file exists

if(existsSync('password.txt')){
    console.log('File Exist')
}