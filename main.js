/*RESEARCH PREVIEW function*/
//takes a section from research.html and places it in index.html


//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums,
//who is still helping people, even after his death

jQuery(function async($){
	$('#current-research-preview-1').load('research.html #research-preview-1');
});

jQuery(function async($){
	$('#current-research-preview-title-1').load('research.html #research-title-1');
});

/*GLOBAL VARIABLES*/
//for nav link items
const about = document.getElementById('nav-link-about');
const publications = document.getElementById('nav-link-publications');
const research = document.getElementById('nav-link-research');
const data = document.getElementById('nav-link-data');
const teaching = document.getElementById('nav-link-teaching');
const navLinks = [about, publications, research, data, teaching];

const aboutDrop = document.getElementById('nav-drop-about');
const publicationsDrop = document.getElementById('nav-drop-publications');
const researchDrop = document.getElementById('nav-drop-research');
const dataDrop = document.getElementById('nav-drop-data');
const teachingDrop = document.getElementById('nav-drop-teaching');
const navLinksDrop = [aboutDrop, publicationsDrop, researchDrop, dataDrop, teachingDrop];

const leadText = document.querySelector('lead-text');

about.style.fontWeight = '800';
aboutDrop.style.fontWeight = '800';


/*BOLDING functions for nav links*/
//the function goes through the array of nav links looking for bolded ones, then unbolds them. Then it bolds the active nav item.
about.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    about.style.fontWeight = '800';
});

publications.addEventListener('click', function(){
    navLinks.forEach(element => {
          if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    publications.style.fontWeight = '800';
});

research.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    research.style.fontWeight = '800';
});

data.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    data.style.fontWeight = '800';
});

teaching.addEventListener('click', function(){
    navLinks.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    teaching.style.fontWeight = '800';
});

aboutDrop.addEventListener('click', function(){
    navLinksDrop.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    aboutDrop.style.fontWeight = '800';
});

publicationsDrop.addEventListener('click', function(){
    navLinksDrop.forEach(element => {
          if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    publicationsDrop.style.fontWeight = '800';
});

researchDrop.addEventListener('click', function(){
    navLinksDrop.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    researchDrop.style.fontWeight = '800';
});

dataDrop.addEventListener('click', function(){
    navLinksDrop.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    dataDrop.style.fontWeight = '800';
});

teachingDrop.addEventListener('click', function(){
    navLinksDrop.forEach(element => {
        if (element.style.fontWeight = '800') {
            element.style.fontWeight = '500';
        }
    });
    teachingDrop.style.fontWeight = '800';
});