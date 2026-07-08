const add = (a,b)=>{
    return a+b;
}


// module.exports = {add}

const sub = (a, b)=>{
    return a-b;
}

const mul = (a, b)=>{
    return a*b;
}

// export.module = {add, sub, mul}  for commonjs 


class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

export { add, sub, mul, Person };
