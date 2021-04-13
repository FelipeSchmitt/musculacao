function menu(){
    var menu_img = document.getElementById("menu")
    var content = document.getElementById("content")
    img = document.createElement("img")
    img.src="../image/menu.png"
    menu_img.appendChild(img)
}
function menu_show(){
    var topics = document.getElementById("topics").style
    if (topics.visibility=="hidden"){
        topics.visibility="visible"
    }else{
        topics.visibility="hidden"
    }

    if (window.matchMedia("(max-width:60em)").matches) {
        if (content.style.marginTop=="0px"){
            content.style.marginTop="250px"
        }else{
            content.style.marginTop="0"
        }

    }
    if (window.matchMedia("(min-width:60em)").matches) {
        if (content.style.marginTop=="0px"){
            content.style.marginTop="50px"
        }else{
            content.style.marginTop="0"
        }
    }
    
}
