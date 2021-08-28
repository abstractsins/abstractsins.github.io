/*RESEARCH PREVIEW function*/
//takes a section from research.html and places it in index.html
jQuery(function($){
	$('#result').load('research.html #research-preview');
});


/*GLOBAL VARIABLES*/
//for nav link items
const about = document.getElementById('nav-link-about');
const publications = document.getElementById('nav-link-publications');
const research = document.getElementById('nav-link-research');
const data = document.getElementById('nav-link-data');
const teaching = document.getElementById('nav-link-teaching');
const navLinks = [about, publications, research, data, teaching];


/*BOLD function
const bold = (element) => {
    element.target.style.fontWeight = '800';
};

const navClick = () => {
    about.onclick = none(about);
};*/

/*BOLDING functions for nav links*/
//the function goes through the array of nav links looking for bolded ones, then unbolds them. Then it bolds the active nav item.
about.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = 'bold') {
            element.style.fontWeight = '500';
        }
    });
    about.style.fontWeight = 'bold';
});

publications.addEventListener('click', function(){
    navLinks.forEach(element => {
          if (element.style.fontWeight = 'bold') {
            element.style.fontWeight = '500';
        }
    });
    publications.style.fontWeight = 'bold';
});

research.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = 'bold') {
            element.style.fontWeight = '500';
        }
    });
    research.style.fontWeight = 'bold';
});

data.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = 'bold') {
            element.style.fontWeight = '500';
        }
    });
    data.style.fontWeight = 'bold';
});

teaching.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = 'bold') {
            element.style.fontWeight = '500';
        }
    });
    teaching.style.fontWeight = 'bold';
});