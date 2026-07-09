import os from 'os'

console.log("Plaform: ", os.platform());  //os type
console.log("Architecture: ", os.arch());  //cpu architecture

console.log("Hostname: ", os.hostname()); //device name
console.log("OS name: ", os.type()); //OS name
console.log("OS release: ", os.release()); //OS version
console.log("OS version ", os.version()); //description about os

console.log("Device uptime: ", os.uptime()/(60*60)); //how long os was running in sec and i converted it into hours
console.log("Total ram: ", os.totalmem()/1024/1024/1024); //total ram in bytes and i converted it into gb

console.log("Free memory: ", os.freemem()/1024/1024/1024); //memory currently free

console.log("CPU cores: ", os.cpus().length); //cpu specification





