var div=document.createElement("div")
    div.setAttribute("class","container")
    document.body.append(div)

    var h2=document.createElement("h2")
    h2.innerHTML="Welcome!"
    div.append(h2)

    var div1=document.createElement("div")
    div1.setAttribute("class","container")
    div.append(div1)

    var div2=document.createElement("div")
    div2.setAttribute("id","t")
    div2.innerText="Type the product name"
    div1.append(div2)

    var input=document.createElement("input")
    input.setAttribute("id","myinput")
    input.setAttribute("placeholder","type here")
    // div1.append(div2)

    var search=document.createElement("button")
    search.innerText="search"
    search.setAttribute("id","bt1")
    search.setAttribute("onclick","demo()")
    
    var reset=document.createElement("button")
    reset.innerText="reset"
    reset.setAttribute("id","bt2")
    reset.setAttribute("onclick","demo1()")
    
div1.append(input,search,reset)

          var div3=document.createElement("div")
            div3.setAttribute("class","container")
            div3.setAttribute("id","z1")
            div.append(div3)
            


function demo1(){
    location.reload()
}
function demo(){
     var a=document.getElementById("myinput").value
     if (a==""||null) {
         alert("input field empty")
     }
      else{
          viewdata()
     }
}
    // viewdata()
    async function viewdata(){
            var b=document.getElementById("myinput").value
            var api = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand="+b)
            var resp = await api.json()
            console.log(resp);

            var len=resp.length
            for(let i=0;i<len;i++){
                const element = resp[i]
                var div4=document.createElement("div")
                div4.setAttribute("id","as")
                div4.innerText= ("Name:" +element.name)
                document.getElementById("z1").append(div4)
                 
                var price = document.createElement("p")
                price.innerText=("Price:" + element.price)
                div4.append(price)

                var product= document.createElement("a")
                  product.innerText= ("Product Link: " +element.product_link)
                  product.href = element.product_link
                  div4.append(product)
                  document.getElementById("z1").append(div4)
      
                
                 var pic= document.createElement("a")
                  pic.innerText= ("Image Link:" +element.image_link)
                  pic.href = element.image_link
                  div4.append(pic)

                  var des= document.createElement("p")
                  des.innerText= ("Description:" +element.description)
                  div4.append(des)
                  document.getElementById("z1").append(div4)


            }       
    }  
    