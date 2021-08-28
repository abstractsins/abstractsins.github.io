/*RESEARCH PREVIEW function*/
//takes a section from research.html and places it in index.html
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
const leadText = document.querySelector('lead-text');

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