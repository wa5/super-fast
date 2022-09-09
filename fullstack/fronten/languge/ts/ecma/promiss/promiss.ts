var shuibpromis=new Promise((fulfull,notfullfil)=>{
    var isshubchalu=false
    setTimeout(()=>{
      
        if(!isshubchalu){
            fulfull('burgaer khalatin')
            console.log('fullfill')
        }else{
            
            console.log()
        }notfullfil('no barger no salry')
    },2000)
})
console.log(shuibpromis)