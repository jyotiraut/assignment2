async function sumFirst(n){
    let sum=0;
    for(i=1;i<5;i++){
        sum+=i
        
    }
    return sum

}

async function final(){
    try{
        const result=await sumFirst()
        console.log("sum is",result)
    } catch(error){
        console.log(error)
    }
}

final()