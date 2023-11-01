const DEMO_URL = "https://course-api.com/react-store-products"

function fetchData(DEMO_URL,callback){   
    fetch(DEMO_URL).then((response)=>{  
        return response.json()
    }).then((data)=>{
        callback(data)
    }).catch((error)=>{
        console.log("error occured",error)
    })
}

function handleData(data){
    for( let i=0;i<22;i++){
       
    }
    var head = document.getElementById("head")
    head.innerHTML=(data[0]["name"])
    

    var heading2 = document.getElementById("heading2")
    heading2.innerHTML=(data[0]["price"])
    

    var heading3= document.getElementById("heading3")
    heading3.innerHTML=(data[0]["shipping"])

   var heading4= document.getElementById("heading4")
    heading4.innerHTML=(data[0]["category"])

    var heading5= document.getElementById("heading5")
    heading5.innerHTML=(data[0]["company"])

    var heading6= document.getElementById("heading6")
    heading6.innerHTML=(data[0]["description"])
    
    
    var heading7= document.getElementById("image")
    image.innerHTML=(data[0]["image"])

    var heading8= document.getElementById("heading8")
    heading8.innerHTML=(data[0]["colors"])
    
}



fetchData(DEMO_URL,handleData)
