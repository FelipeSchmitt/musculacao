function menu(){
    var menu_img = document.getElementById("menu")
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
    
}
