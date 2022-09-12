async function itemlist() {
    var data =await fetch('https://fakestoreapi.com/products');
  var myreadible=await data.json()
    console.log(myreadible)
    myreadible.map((data,i)=>{
        console.log(data.image)
        var img=document.createElement('img')
        img.src=data.image
        img.style.width='200px'
        document.getElementById('root').appendChild(img)
    })
    
    
    


}
itemlist();
