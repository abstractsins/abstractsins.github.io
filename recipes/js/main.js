// 100% hand-coded on Planet Earth

/* TABLE OF CONTENTS */
	// 0 -- Up Button
	// 1 -- Global Variables
	// 1-A -- Slider Preview Objects
	// 1-B -- Catagory Arrays
	// 2 -- Recipe Search Function
	// 3 -- Navigation
	// 3-A -- Index Links
	// 3-B -- Slider Links
	// 3-C -- Tab Browsing
	// 4 -- Sliders
	// 4-A -- Category Sliders
	// 4-B -- Slider Information
	// 5 -- Open Index Function
	// 6 -- Recipe Constructor (For Tags)
	// 7 -- Title Link Function
	// 8 -- Displaying Index Entries
	// 8-A -- Tags
	// 8-B -- Recipe Titles
	// 8-C -- Tag Radio Button Function
/* END TABLE OF CONTENTS */

/* 0 -- Up Button */
/* Function for Up-Button */
const upBtn = document.getElementById('upBtn');
const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For real browsers
	// $('.index-window').show();
}
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "flex";
        downBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
        downBtn.style.display = "none";
    }
}
window.onscroll = () => { scrollFunction() };
/* END 0 -- Up Button */

/* 1 -- GLOBAL VARIABLES */
let titlesArr = [];
let recipeArr = [];
let tagsArr = [];

/* 1-A -- Slider Preview Objects */
// BEEF
let beef = {
	beef1: 'meatloaf',
	beef2: 'chili',
	beef3: 'short-ribs'
}
let beefArray = Object.values(beef);

// BREADS
let breads = {
	bread1: 'biscuits',
	bread2: 'challah',
	bread3: 'langos'
}
let breadsArray = Object.values(breads);

// DESSERTS
let desserts = {
	dessert1: 'cannoli',
	dessert2: 'cookies',dessert3: 'panna-cotta'
}
let dessertsArray = Object.values(desserts);

// SEAFOOD
let seafood = {
	seafood1: 'shrimp-bisque',
	seafood2: 'salmon',
	seafood3: 'crab-cakes'
}
let seafoodArray = Object.values(seafood);

// SOUP
let soups = {
	soup1: 'cauliflower-soup',
	soup2: 'potato-leek',
	soup3: 'shrimp-bisque'
}
let soupsArray = Object.values(soups);
/* END 1-A -- Slider Preview Objects */

/* 1-B -- CATAGORY ARRAYS */
let catsArray = [
	beefArray,
	breadsArray,
	dessertsArray,
	seafoodArray,
	soupsArray
]

let dishesArray = [
	...beefArray,
	...breadsArray,
	...dessertsArray,
	// ...seafoodArray,
	...soupsArray
]

let catsSingularArray = [
	'beef',
	'bread',
	'dessert',
	// 'seafood',
	'soup'
]
/* END 1-B -- CATAGORY ARRAYS */
/* END 1 -- GLOBAL VARIABLES */

/* 2 -- RECIPE SEARCH FUNCTION */
const search = () => {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('recipe-search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('recipe-list');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

const searchMaster = () => {
	let input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('recipe-search-master');
	filter = input.value.toUpperCase();
	ul = document.getElementById('alpha-listing');
	li = ul.getElementsByTagName('li');
	
    for (i = 0; i < li.length; i++) {
        // a = li[i].getElementsByTagName('a')[0];
        txtValue = li[i].textContent || li[i].innerText || li[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

/* END 2 -- Recipe Search Window Function */

/* 3 -- NAVIGATION */
/* Functions for jumping to recipe view  */
/* and loading correct recipe */

/* 3-A -- INDEX LINKS */
// A
// B
	// Best Biscuits
$('#biscuits-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('biscuits.html');
})
// C
	// CCPB Cookies
$('#cookies-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('cookies.html');
})
	// Challah
$('#challah-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('challah.html');
})
// D
// E
// F
// G
// H
// I
// J
// K
	// Gas Station Chili
$('#chili-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('chili.html');
})
// L
	// Langos
$('#langos-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('langos.html');
})
// M
	// Moroccan Cauliflower
$('#moroccan-cauli-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('cauliflower-soup.html');
})
	// My Meatloaf
$('#meatloaf-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('meatloaf.html');
})
// N
// O
// P
	// Panna Cotta
$('#panna-cotta-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('panna-cotta.html');
})	
	// Potato Leek Soup
$('#potato-leek-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('potato-leek.html');
})
// Q
// R
	// Red Wine Short Ribs
$('#short-ribs-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('short-ribs.html');
})
// S
	// Shrimp Bisque
$('#shrimp-bisque-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('shrimp-bisque.html');
})
	// Stout-Malted Cannoli
$('#cannoli-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('cannoli.html');
})
// T
// U
// V
// W
// X
// Y
// Z
/* END 3-A -- INDEX LINKS */

/* 3-B -- SLIDER LINKS */
// BEEF
for (let i = 1; i <= beefArray.length; i++) {
	$('#beef-'+i+'-link').on('click', function() {
		$('.recipe-display-section').addClass('active');
		$('#recipe-display-container').load(beefArray[i-1] + '.html')
	})
}
// BREADS
for (let i = 1; i <= breadsArray.length; i++) {
	$('#bread-'+i+'-link').on('click', function() {
		$('.recipe-display-section').addClass('active');
		$('#recipe-display-container').load(breadsArray[i-1] + '.html')
	})
}
// DESSERTS
for (let i = 1; i <= dessertsArray.length; i++) {
	$('#dessert-'+i+'-link').on('click', function() {
		$('.recipe-display-section').addClass('active');
		$('#recipe-display-container').load(dessertsArray[i-1] + '.html')
	})
}
// SOUPS
for (let i = 1; i <= soupsArray.length; i++) {
	$('#soup-'+i+'-link').on('click', function() {
		$('.recipe-display-section').addClass('active');
		$('#recipe-display-container').load(soupsArray[i-1] + '.html')
	})
}
/* END 3-B -- SLIDER LINKS */

/* 3-C -- TAB BROWSING */
	// as described on page 499 of "JavaScript and JQuery," by Jon Duckett
$('.tab-list').each(function() {
	let $this = $(this);
	let $tab = $this.find('li.active');
	let $link = $tab.find('a');
	let $panel = $($link.attr('href'));

	$this.on('click', '.tab-control', function(e) {
		e.preventDefault();
		let $link = $(this);
		let id = this.hash;

		if (id && !$link.is('.active')) {
			$panel.removeClass('active');
			$tab.removeClass('active');

			$panel = $(id).addClass('active');
			$tab = $link.parent().addClass('active');
		}
	});
});
/* END 3-C -- TAB BROWSING */
/* END 3 -- NAVIGATION */

/* 4 -- SLIDERS */
	// as described on page 516 of "JavaScript and JQuery," by Jon Duckett
/* 4-A Category Sliders */

$('.slider').each(function() {
	let $this = $(this);
	let $group = $this.find('.slide-group');
	let $slides = $this.find('.slide');
	let buttonArray = [];
	let currentIndex = 0;
	let timeout;

	// MOVE() GOES HERE
	function move(newIndex) {
		let animateLeft, slideLeft;

		advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

		if ($group.is(':animated') || currentIndex === newIndex || $group.is(':hover')) {
			return;
		}

		buttonArray[currentIndex].removeClass('active');
		buttonArray[newIndex].addClass('active');

		if (newIndex > currentIndex) {
			slideLeft = '200%';
			animateLeft = '-200%';
		} else {
			slideLeft = '-200%';
			animateLeft = '200%';
		}

		$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
		$group.animate( {left: animateLeft} , function() {
			$slides.eq(currentIndex).css( {display: 'none'} );
			$slides.eq(newIndex).css( {left: 0} );
			$group.css( {left: 0} );
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			if (currentIndex < ($slides.length - 1)) {
				move(currentIndex + 1);
			} else {
				move(0);
			}
		}, 7000);
	}

	$.each($slides, function(index) {

		const $button = $('<button type="button" class="slide-btn"> </button>');

		if (index === currentIndex) {
			$button.addClass('active');
		}

		$button.on('click', function() {
			move(index);
		}).appendTo($this.find('.slide-buttons'));
		buttonArray.push($button);
	})

	advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

	// $('button .prev').on('click', advance())

});
/* END 4-A Category Sliders */

/* 4-B -- SLIDER INFO FUNCTIONS */
// Takes information from the recipe pages and displays it in the homepage slider

	//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums
	//who is still helping people, even after his death
	
	// Iterating beef-1, beef-2, etc...
	let dishSerials = [];
	catsSingularArray.forEach(el => {
		for (let j=1; j<catsArray[j].length+1; j++) {
			dishSerials.push(el + '-' + j)
		}
	})

	for (let i=0; i<dishSerials.length; i++) {
		$('#'+dishSerials[i]+'-title').load(dishesArray[i] + '.html #recipe-name');
		$('#'+dishSerials[i]+'-prep-time').load(dishesArray[i] + '.html #prep-time');
		$('#'+dishSerials[i]+'-cook-time').load(dishesArray[i] + '.html #cook-time');
		$('#'+dishSerials[i]+'-calories').load(dishesArray[i] + '.html #calories');
		$('#'+dishSerials[i]+'-protein').load(dishesArray[i] + '.html #protein');
		$('#'+dishSerials[i]+'-carbs').load(dishesArray[i] + '.html #carbs');
		$('#'+dishSerials[i]+'-fat').load(dishesArray[i] + '.html #fat');
		$('#'+dishSerials[i]+'-ingredients').load(dishesArray[i] + '.html .shopping-item');
		$('#'+dishSerials[i]+'-hardware').load(dishesArray[i] + '.html .hardware-item');
		$('#'+dishSerials[i]+'-tag-0').load(dishesArray[i] + '.html #tag-0');
		$('#'+dishSerials[i]+'-tag-1').load(dishesArray[i] + '.html #tag-1');
		$('#'+dishSerials[i]+'-tag-2').load(dishesArray[i] + '.html #tag-2');
		$('#'+dishSerials[i]+'-tag-3').load(dishesArray[i] + '.html #tag-3');
		$('#'+dishSerials[i]+'-tag-4').load(dishesArray[i] + '.html #tag-4');
		$('#'+dishSerials[i]+'-tag-5').load(dishesArray[i] + '.html #tag-5');
		$('#'+dishSerials[i]+'-tag-6').load(dishesArray[i] + '.html #tag-6');
	}

	let recipeDirectory = {};
	dishSerials.forEach((key, i) => {
		recipeDirectory[key] = `${dishesArray[i]}.html`;
	})

	let recipeFileNames = Object.values(recipeDirectory);
/* END 4-B -- SLIDER INFO FUNCTIONS */
/* END 4 -- SLIDERS */

/* 5 -- OPEN INDEX FUNCTION */
const openIndex = (tag) => {
	// $('#master-index-container').load('master-index.html'); // load recipe index file into section
	$('#master-index-section').addClass('active'); // open recipe index below after clicking on a tag
	$('.index-window').hide(); // hide the sidebar 
	window.open('#master-index-section', '_self'); // HREF
}
/* 5 -- END OPEN INDEX FUNCTION */

/* 6 -- RECIPE CONSTRUCTOR (FOR TAGS) */
// RECIPE CONSTRUCTOR FUNCTION
class Recipe {
	constructor(name, path, serial, id, tags) {
		this.name = name;
		this.path = path;
		this.serial = serial;
		this.id = id;
		this.tags = tags;
		this.recipePush = function () {
			recipeArr.push(this);
		};
	}
}

// Build new recipes here
let biscuits = new Recipe('Best Biscuits', 'biscuits.html', 'bread-1', 0, ['breads', 'quick bread', 'holidays', 'freeze extra', 'fallback']).recipePush();
let cannoli = new Recipe('Stout Malted Cannoli', 'cannoli.html', 'dessert-1', 11, ['desserts', 'large batch', 'pinky up', 'Italian-ish', 'very dairy']).recipePush();
let cauliSoup = new Recipe('Moroccan Cauliflower Soup', 'cauliflower-soup.html', 'soup-1', 5, ['soups', 'super simple', 'Winter potage', 'Mediterranean', 'creamy soup', 'very dairy']).recipePush();
let challah = new Recipe('Challah', 'challah.html', 'bread-2', 2, ['breads', 'fermentation', 'holidays', 'Jewish', 'rich dough', 'plan ahead']).recipePush();
let chili = new Recipe('Kwiki-Mart Chili', 'chili.html', 'beef-2', 3, ['beef', 'one pan', 'patience', 'low and slow', 'Winter potage', 'spicy?']).recipePush();
let cookies = new Recipe('CCPB Cookies', 'cookies.html', 'dessert-2', 1, ['desserts', 'cookies', 'whole wheat', 'super simple', 'fallback']).recipePush();
let langos = new Recipe('Langos', 'langos.html', 'bread-3', 4, ['breads', 'fermentation', 'lean dough', 'fallback', 'freeze extra', 'special occassion']).recipePush();
let meatloaf = new Recipe('My Meatloaf', 'meatloaf.html', 'beef-1', 6, ['beef', 'one pan', 'set/forget', 'breezy', 'fallback', 'Amber-approved']).recipePush();
let shortRibs = new Recipe('Red Wine Short Ribs', 'short-ribs.html', 'beef-3', 9, ['beef', 'patience', 'low and slow', 'plan ahead', 'Amber-approved']).recipePush();
let shrimpBisque = new Recipe('Shrimp Bisque', 'shrimp-bisque.html', 'soup-3', 10, ['soups', 'seafood', 'creamy soup', 'special occassion', 'very dairy']).recipePush();
let pannaCotta = new Recipe('Panna Cotta', 'panna-cotta.html', 'dessert-3', 7, ['desserts', 'fallback', 'super simple', 'plan ahead', 'very dairy', 'Italian-ish', 'Summer']).recipePush();
let potLeek = new Recipe('Potato Leek Soup', 'potato-leek.html', 'soup-2', 8, ['soups', 'Winter potage', 'creamy soup', 'super simple', 'very dairy']).recipePush();

// FUNCTION CALLS
recipeArr.forEach(el => tagsArr.push(el.tags));
/* END 6 -- RECIPE CONSTRUCTOR (FOR TAGS) */

/* 7 -- TITLE LINK FUNCTION */
function titleClick(idNum){
	$('#recipe-display-section').addClass('active');
	let titleGroup = document.getElementsByClassName('title master');
	for (let i=0; i<titleGroup.length; i++) {

		if (i === idNum) {
			let directory = {
				0: "biscuits.html",
				3: "chili.html",
				9: "short-ribs.html",
				6: "meatloaf.html",
				2: "challah.html",
				4: "langos.html",
				11: "cannoli.html",
				1: "cookies.html",
				7: "panna-cotta.html",
				5: "cauliflower-soup.html",
				8: "potato-leek.html",
				10: "shrimp-bisque.html"
			}
			console.log('clicked title number: ' +idNum+ ': ' + titleGroup[idNum].innerHTML);
			console.log(directory);
			$('.recipe-display-section').addClass('active');
			$('#recipe-display-container').load(directory[i]);
		}
	}
}
/* END 7 -- TITLE LINK FUNCTION */

/* 8 -- DISPLAYING INDEX ENTRIES */
/* 8-A -- TAGS  */
let tagsJoin = tagsArr.join(',')
let tagsSplit = tagsJoin.split(',');
let tagSet = new Set(tagsSplit);
let tagSetArr = Array.from(tagSet);
let sortedTags = tagSetArr.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

// FUNCTION FOR CREATING THE TAG LIST-ITEMS
for (let i=0; i < sortedTags.length; i++) {
	$('#all-tags').append('<li class="tag master" id="'+i+'" onclick="tagSort('+i+')">'+sortedTags[i]+'</li>')
}
/* END 8-A -- TAGS  */

/* 8-B -- RECIPE TITLES */
// ALPHABETICAL MASTER INDEX
for (let i=0;i<recipeArr.length;i++){
	titlesArr.push(recipeArr[i].name);
}
titlesArr.sort();

// FUNCTION FOR CREATING THE TITLE LIST-ITEMS
for (let i=0; i<titlesArr.length; i++) {
	$('#alpha-listing').append('<a href="#recipe-display-section" id="'+i+'" onclick="titleClick('+i+')"><li class="title master">'+titlesArr[i]+'</li></a>')
}
/* END 8-B -- RECIPE TITLES */

/* 8-C -- TAG RADIO BUTTON FUNCTION */

function tagSort(idNum){
	let tag = document.getElementById(idNum);
	let tagGroup = document.getElementsByClassName('tag master');
	let $ul = $('#tag-results');
	for (let i=0; i<tagGroup.length; i++) {
		if (i === idNum) {
			// IF TAG IS THE ONE YOU CLICKED THEN APPLY STYLES
			tagGroup[i].style.backgroundColor = 'whitesmoke'; 
			tagGroup[i].style.transform = '';
			tagGroup[i].style.filter = 'unset';
			tagGroup[i].classList.add('active');
			
			/* FILTER RESULTS GO HERE */
			let tagName = tagGroup[i].innerHTML;
			let results = [];
			recipeArr.find(el => {
				for (let i=0; i<7; i++) {
					if (el.tags[i] === tagName) {
						results.push(`<a href="#recipe-display-section" id="${el.id}" onclick="titleClick(${el.id})"><li class="title master">${el.name}</li>`);
					}
				}
			})
			$ul.empty();
			// HERE SPECIFICALLY
			$ul.append(`${results.join('<br>')}</li>`); // RIGHT HERE
		} else if (i != idNum){ // ALL OTHER TAGS
			tagGroup[i].style.backgroundColor = 'var(--tag-bg)';
			tagGroup[i].style.filter = '';
			tagGroup[i].classList.remove('active');
		}
	}
}
/* END 8-C -- TAG RADIO BUTTON FUNCTION */
/* END 8 -- DISPLAYING INDEX ENTRIES */

/* THIS SPACE INTENTIONALLY LEFT BLANK */
//
//
//
//
//
//
//
//
/* OK */