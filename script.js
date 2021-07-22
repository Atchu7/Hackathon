var div = document.createElement("div")
div.setAttribute("class", "container")
div.setAttribute("id", "nav")
document.body.append(div)

var h2 = document.createElement("h2")
h2.setAttribute("id", "head")
h2.innerHTML = "Welcome!"
div.append(h2)

var div1 = document.createElement("div")
div1.setAttribute("class", "container")
div.append(div1)

var div2 = document.createElement("h3")
div2.setAttribute("id", "t")
div2.style.textAlign = "center"
div2.innerText = "Choose your brand"
div1.append(div2)

var input = document.createElement("input")
input.setAttribute("id", "myinput")
input.setAttribute("placeholder", "type here")
input.style.paddingRight = "30px"
// div1.append(div2)

var search = document.createElement("button")
search.innerText = "search"
search.setAttribute("id", "bt1")
search.setAttribute("onclick", "demo()")

var reset = document.createElement("button")
reset.innerText = "reset"
reset.setAttribute("id", "bt2")
reset.setAttribute("onclick", "demo1()")

div1.append(input, search, reset)

var div3 = document.createElement("div")
div3.setAttribute("class", "container")
div3.setAttribute("id", "z1")
div3.style.display = "block"
div3.style.justifyContent = "center"
div.append(div3)




function demo1() {
    location.reload()
}
function demo() {
    var a = document.getElementById("myinput").value
    if (a == "" || null) {
        alert("input field empty")
    }
    else {
        viewdata()
    }
}
// viewdata()
async function viewdata() {
    var b = document.getElementById("myinput").value
    var api = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + b)
    var resp = await api.json()
    console.log(resp);

    var len = resp.length
    for (let i = 0; i < len; i++) {
        const element = resp[i]
        var div4 = document.createElement("div")
        div4.setAttribute("id", "as")
        div4.style.marginTop = "20px"
        div4.innerText = ("Name : " + element.name)


        var brand = document.createElement("p")
        brand.innerText = ("Brand : " + element.brand)


        var img = document.createElement("img")
        img.src = element.image_link
        img.setAttribute("id", "image_link")
        img.style.border = "1px solid black"


        var price = document.createElement("p")
        price.setAttribute("class", "asd")
        price.innerText = ("Price : " + element.price)


        var product = document.createElement("a")
        product.setAttribute("class", "asd")
        product.href = element.product_link
        product.innerText = ("Product Link : " + product.href)
        product.style.marginTop = "15px"


        var div5 = document.createElement("div")
        var pic = document.createElement("a")
        pic.setAttribute("class", "asd")
        pic.href = element.image_link
        pic.innerText = ("Image Link : " + pic.href)
        div5.style.marginTop = "15px"
        div5.append(pic)

        var des = document.createElement("div")
        des.setAttribute("class", "asd")
        des.style.borderBottom = "1px solid black";
        des.style.marginTop = "15px"
        des.style.paddingBottom = "10px"
        des.innerText = ("Description : " + element.description)
        console.log(des.innerText)
        document.getElementById("z1").append(div4, brand, img, price, product, div5, des)

    }
}

