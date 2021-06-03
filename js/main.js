
var nav = document.querySelector(".header-nav");
var navexit = document.querySelector(".header-nav-exit");
var navcontent = document.querySelector(".header-nav-ul");

/* Header mobile */

function menu() {
    nav.style.width = "100%";
    navexit.style.display = "block";
    navcontent.style.display = "block";
}

function menuClose() {
    nav.style.width = "0%";
    navexit.style.display = "none";
    navcontent.style.display = "none";
}

/* Scroll onlinequiz*/

var tilmeldSection = document.querySelector(".onlinequiz-tilmelding");

function scrollTilmelding() {
    tilmeldSection.scrollIntoView({behavior: "smooth"});
}

/* Carousel */

var sildeitem1 = document.querySelector(".carousel-item-1");
var slideitem2 = document.querySelector(".carousel-item-2");
var button1 = document.querySelector(".carousel-button1");
var button2 = document.querySelector(".carousel-button2");

function next() {
    sildeitem1.style.transform = "translateX(-85vw)";
    slideitem2.style.transform = "translateX(-85vw)";
    button1.style.display = "block";
    button2.style.display = "none";
}

function back() {
    button1.style.display = "none";
    button2.style.display = "block";
    sildeitem1.style.transform = "translateX(0)";
    slideitem2.style.transform = "translateX(0)";
}


var frontSection = document.querySelector(".front-info-section");
var quizSection = document.querySelector(".quiz-tilmelding");
var onlineQuizSection = document.querySelector(".onlinequiz-tilmelding");
var tableSection = document.querySelector(".booking-table");
var eventSection = document.querySelector(".booking-event");

/* Front */

function togo(){
    document.querySelector('.front-modal-togo-section').style.display = 'flex';  
}

function back(){
    document.querySelector('.front-modal-togo-section').style.display = 'none';
}


function scrollFront() {
    frontSection.scrollIntoView({behavior: "smooth"});
}

/* Tilbud */

function tilbud(){
    document.querySelector('.tilbud-modal-mobile').style.display = 'flex';  
}

function closeTilbud(){
    document.querySelector('.tilbud-modal-mobile').style.display = 'none';
}

/* Quiz */
function sendQuiz(){
    document.querySelector('.quiz-modal-mobile').style.display = 'flex';  
}

function closeQuiz(){
    document.querySelector('.quiz-modal-mobile').style.display = 'none';
}

function scrollQuiz() {
    quizSection.scrollIntoView({behavior: "smooth"});
}

/* Online Quiz */

function startOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile').style.display = 'flex';  
}

function nextOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile').style.display = 'none';
    document.querySelector('.online-quiz-modal-mobile-next').style.display = 'flex';  
}

function closeOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile-next').style.display = 'none';
}

function scrollOnlineQuiz() {
    onlineQuizSection.scrollIntoView({behavior: "smooth"});
}


/* Booking */

function scrollTable() {
    tableSection.scrollIntoView({behavior: "smooth"});
}

function scrollEvent() {
    eventSection.scrollIntoView({behavior: "smooth"});
}


function book(){
    document.querySelector('.booking-modal-mobile').style.display = 'flex';
    
}

document.getElementById('close').addEventListener('click',
function(){
    document.querySelector('.booking-modal-mobile').style.display = 'none';
});

