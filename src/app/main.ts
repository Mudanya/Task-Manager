function welcome(name:string){
    console.log("Hi")
    setTimeout(()=>{
        console.log("Iam " +name)
    },0)
    console.log("Bye")
}

welcome("hilla")