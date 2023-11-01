function sum(c){ //using callback 
    for(i=1;i<5;i++)
    c+=i;
return c;
}

function compute(action,c){
    return action(c)
}

console.log(compute(sum,0))


//Using promises 
const promise = new Promise ((resolve,reject)=>{
    setTimeout(function(n){
     resolve("sucessful")
     reject("rejected")
    },2000)
})

promise.then((response)=>{
    let n=0;
    for(i=1;i<5;i++){
        n+=i
        
    }
    console.log(n)
}).catch((error)=>
{
    console.log(error)
})

console.log("finished")