
var nav = document.querySelector(".header-nav");
var navexit = document.querySelector(".header-nav-exit");
var navcontent = document.querySelector(".header-nav-ul");

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



var tilmeldSection = document.querySelector(".onlinequiz-tilmelding");

function scrollTilmelding() {
    tilmeldSection.scrollIntoView({behavior: "smooth"})
}

var sildeitem1 = document.querySelector(".carousel-item-1");
var slideitem2 = document.querySelector(".carousel-item-2");
var button1 = document.querySelector(".carousel-button1")
var button2 = document.querySelector(".carousel-button2")

function next() {
    sildeitem1.style.transform = "translateX(-85vw)"
    slideitem2.style.transform = "translateX(-85vw)"
    button1.style.display = "block"
    button2.style.display = "none"
}

function back() {
    button1.style.display = "none"
    button2.style.display = "block"
    sildeitem1.style.transform = "translateX(0)"
    slideitem2.style.transform = "translateX(0)"
}