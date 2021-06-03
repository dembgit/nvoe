var frontSection = document.querySelector(".front-info-section");
var quizSection = document.querySelector(".quiz-tilmelding");
var onlineQuizSection = document.querySelector(".onlinequiz-tilmelding");
var tableSection = document.querySelector(".booking-table");
var eventSection = document.querySelector(".booking-event");

/* Front */

function togo(){
    document.querySelector('.front-modal-togo-section').style.display = 'flex';  
};

function back(){
    document.querySelector('.front-modal-togo-section').style.display = 'none';
}


function scrollFront() {
    frontSection.scrollIntoView({behavior: "smooth"})
}

/* Tilbud */

function tilbud(){
    document.querySelector('.tilbud-modal-mobile').style.display = 'flex';  
};

function closeTilbud(){
    document.querySelector('.tilbud-modal-mobile').style.display = 'none';
}

/* Quiz */
function sendQuiz(){
    document.querySelector('.quiz-modal-mobile').style.display = 'flex';  
};

function closeQuiz(){
    document.querySelector('.quiz-modal-mobile').style.display = 'none';
}

function scrollQuiz() {
    quizSection.scrollIntoView({behavior: "smooth"})
}

/* Online Quiz */

function startOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile').style.display = 'flex';  
};

function nextOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile').style.display = 'none';
    document.querySelector('.online-quiz-modal-mobile-next').style.display = 'flex';  
};

function closeOnlineQuiz(){
    document.querySelector('.online-quiz-modal-mobile-next').style.display = 'none';
}

function scrollOnlineQuiz() {
    onlineQuizSection.scrollIntoView({behavior: "smooth"})
}


/* Booking */

function scrollTable() {
    tableSection.scrollIntoView({behavior: "smooth"})
}

function scrollEvent() {
    eventSection.scrollIntoView({behavior: "smooth"})
}


function book(){
    document.querySelector('.booking-modal-mobile').style.display = 'flex';
    
};

function amount(){
    document.querySelector('.amount').style.color = 'var(--nvoe-black)';
    document.querySelector('.amount').style.border = '2px solid var(--nvoe-yellow)';
    document.querySelector('.amount').style.backgroundColor = 'var(--nvoe-yellow)';
}

document.getElementById('close').addEventListener('click',
function(){
    document.querySelector('.booking-modal-mobile').style.display = 'none';
});

