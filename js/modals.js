var frontSection = document.querySelector(".front-info-section");
var tableSection = document.querySelector(".booking-table");
var eventSection = document.querySelector(".booking-event");

function togo(){
    document.querySelector('.front-modal-togo-section').style.display = 'flex';  
};

function back(){
    document.querySelector('.front-modal-togo-section').style.display = 'none';
}

function scrollFront() {
    frontSection.scrollIntoView({behavior: "smooth"})
}

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

