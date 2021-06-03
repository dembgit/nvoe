
var nav = document.querySelector(".header-nav");
var navexit = document.querySelector(".header-nav-exit");
var navcontent = document.querySelector(".header-nav-ul")

function menu() {
    nav.style.width = "100%"
    navexit.style.display = "block"
    navcontent.style.display = "block"
}

function menuClose() {
    nav.style.width = "0%"
    navexit.style.display = "none"
    navcontent.style.display = "none"
}