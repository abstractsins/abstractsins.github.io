// 100% hand-coded on Planet Earth

/* TABLE OF CONTENTS */
	// 0 -- Up Button
	// 1 -- Global Variables
	// 1-A -- Slider Preview Objects
	// 1-B -- Catagory Arrays
	// 2 -- Recipe Search Window Function
	// 3 -- Navigation
	// 3-A -- Index Links
	// 3-A-2 -- Index 700 Links
	// 3-B -- Slider Links
	// 3-C -- Tab Browsing
	// 4 -- Sliders
	// 4-A -- Category Sliders
	// 4-B -- Slider Information
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
let titlesArray = [];
/* 1-A -- Slider Preview Objects */
// BEEF
let beef = {
	beef1: 'meatloaf',
	beef2: 'chili',
	beef3: 'short-ribs'
}
let beefArray = Object.values(beef);
// console.log(beefArray)

// BREADS
let breads = {
	bread1: 'biscuits',
	bread2: 'challah',
	bread3: 'langos'
}
let breadsArray = Object.values(breads);
// console.log(breadsArray)

// DESSERTS
let desserts = {
	dessert1: 'cannoli',
	dessert2: 'cookies',dessert3: 'panna-cotta'
}
let dessertsArray = Object.values(desserts);
// console.log(dessertsArray)

// SEAFOOD
let seafood = {
	seafood1: 'shrimp-bisque',
	seafood2: 'salmon',
	seafood3: 'crab-cakes'
}
let seafoodArray = Object.values(seafood);
// console.log(seafoodArray)

// SOUP
let soups = {
	soup1: 'cauliflower-soup',
	soup2: 'potato-leek',
	soup3: 'shrimp-bisque'
}
let soupsArray = Object.values(soups);
// console.log(soupsArray)
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

/* 2 -- Recipe Search Window Function */
/* Search function for master recipe list */
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

const search700 = () => {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('recipe-search-700');
    filter = input.value.toUpperCase();
    ul = document.getElementById('recipe-list-700');
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

/* 3-A-2 -- INDEX-700 LINKS */
// A
// B
	// Best Biscuits
$('#biscuits-link-700').on('click', function() {
		$('.recipe-display-section').addClass('active');
		$('#recipe-display-container').load('biscuits.html');
})
// C
	// CCPB Cookies
$('#cookies-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('cookies.html');
})	
	// Challah
$('#challah-link-700').on('click', function() {
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
	// Kwiki-Mart Chili
$('#chili-link-700').on('click', function() {
$('.recipe-display-section').addClass('active');
$('#recipe-display-container').load('chili.html');
})
// L
	// Langos
$('#langos-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('langos.html');
})
// M
	// Moroccan Cauliflower
$('#moroccan-cauli-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('cauliflower-soup.html');
})
	// My Meatloaf
$('#meatloaf-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('meatloaf.html');
})
// N
// O
// P
	// Panna Cotta
$('#panna-cotta-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('panna-cotta.html');
})	
	
	// Potato Leek Soup
$('#potato-leek-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('potato-leek.html');
})
// Q
// R
	// Red Wine Short Ribs
$('#short-ribs-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('short-ribs.html');
})
// S
	// Shrimp Bisque
$('#shrimp-bisque-link-700').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('shrimp-bisque.html');
})
	// Stout-Malted Cannoli
$('#cannoli-link-700').on('click', function() {
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
/* END 3-A-2 -- INDEX-700 LINKS */

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
	const move = (newIndex) => {
		let animateLeft, slideLeft;

		advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

		if ($group.is(':animated') || currentIndex === newIndex || $group.is(':hover')) {
			return;
		}

		buttonArray[currentIndex].removeClass('active');
		buttonArray[newIndex].addClass('active');

		if (newIndex > currentIndex) {
			slideLeft = '100%';
			animateLeft = '-100%';
		} else {
			slideLeft = '-100%';
			animateLeft = '100%';
		}

		$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
		$group.animate( {left: animateLeft} , () => {
			$slides.eq(currentIndex).css( {display: 'none'} );
			$slides.eq(newIndex).css( {left: 0} );
			$group.css( {left: 0} );
			currentIndex = newIndex;
		});
	}

	const advance = () => {
		clearTimeout(timeout);
		timeout = setTimeout( () => {
			if (currentIndex < ($slides.length - 1)) {
				move(currentIndex + 1);
			} else {
				move(0);
			}
		}, 7000);
	}

	$.each($slides, (index) => {

		let $button = $('<button type="button" class="slide-btn"> </button>');

		if (index === currentIndex) {
			$button.addClass('active');
		}

		$button.on('click', () => {
			move(index);
		}).appendTo($this.find('.slide-buttons'));
		buttonArray.push($button);

	})

	advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

	$('button .prev').on('click', advance())

});
/* END 4-A Category Sliders */

/* 4-B -- SLIDER INFO FUNCTIONS */
// Takes information from the recipe pages and displays it in the homepage slider

	//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums
	//who is still helping people, even after his death

// jQuery(function async($){
	
	// Iterating beef-1, beef-2, etc...
	let dishSerials = [];
	catsSingularArray.forEach(el => {
		for (let j=1; j<catsArray[j].length+1; j++) {
			dishSerials.push(el + '-' + j)
		}
	})
	console.log('serial: ' + dishSerials);
	console.log('serial length: ' + dishSerials.length);
	console.log('disharray length: ' + dishesArray.length);

	for (let i=0; i<dishSerials.length; i++) {
			$('#'+dishSerials[i]+'-title').load(dishesArray[i] + '.html #recipe-name');
			$('#'+dishSerials[i]+'-title').addClass('prime');
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
	console.log('titlesArray: ' + titlesArray);
	console.log($('.prime'));

	let recipeDirectory = {};
	dishSerials.forEach((key, i) => {
		recipeDirectory[key] = `${dishesArray[i]}.html`;
	
	})
	let recipeFileNames = Object.values(recipeDirectory);
								console.log('dishesArray: ' + dishesArray);
								console.log(recipeDirectory);
								console.log(recipeFileNames);

	// for (let i = 0; i < Object.keys(recipeDirectory).length; i++) {
	// 	$('.open-recipe-btn[id="      'Object.keys(recipeDirectory)[i]'-link    "]').on('click', function() {
	// 		$('.recipe-display-section').addClass('active');
	// 		$('#recipe-display-container').load(Object.values(recipeDirectory)[i])
	// 	})
	// };

	// });
/* END 4-B -- SLIDER INFO FUNCTIONS */

/* END 4 -- SLIDERS */

/* EXPERIMENTAL SECTION */

// Function for displaying tags without duplicates
const openIndex = (tag) => {
	$('#master-index-container').load('master-index.html'); // load recipe index file into section
	$('#master-index-section').addClass('active'); // open recipe index below after clicking on a tag
	$('.index-window').hide(); // hide the sidebar 
	window.open('#master-index-section', '_self');
	let rand = Math.floor(Math.random() * 100) // testing
	console.log(`You pressed: ${tag}\nRandom Number: ${rand}`); // testing
}


/* ATTENTION */
/* OBJECTS MODULE IMPORT */
let recipeArr = [];

function Recipe(name, path, serial, tag0, tag1, tag2, tag3, tag4, tag5, tag6) {
    this.name = name;
    this.path = path;
	this.serial = serial;
	this.tag0 = tag0;
	this.tag1 = tag1;
	this.tag2 = tag2;
	this.tag3 = tag3;
	this.tag4 = tag4;
	this.tag5 = tag5;
	this.tag6 = tag6;
    this.recipePush = function() {
        recipeArr.push(this);
    };
}

// Build new recipes here
const recipeCollector = () => {
    let biscuits = new Recipe('Best Biscuits', 'biscuits.html', 'bread-1','breads', 'quick bread', 'holidays', 'freeze extra', 'fallback').recipePush();
    let cannoli = new Recipe('Stout Malted Cannoli', 'cannoli.html', 'dessert-1', 'desserts', 'large batch', 'pinky up', 'Italian-ish', 'very dairy').recipePush();
    let cauliSoup = new Recipe('Moroccan Cauliflower Soup', 'cauliflower-soup.html', 'soup-1', 'soups', 'super simple', 'Winter potage', 'Mediterranean', 'creamy soup', 'very dairy').recipePush();
    let challah = new Recipe('Challah', 'challah.html', 'bread-2', 'breads', 'fermentation', 'holidays', 'Jewish', 'rich dough', 'plan ahead').recipePush();
    let chili = new Recipe('Kwiki-Mart Chili', 'chili.html', 'beef-2', 'beef', 'one pan', 'patience', 'low & slow', 'Winter potage', 'spicy?').recipePush();
    let cookies = new Recipe('CCPB Cookies', 'cookies.html', 'dessert-2', 'desserts', 'cookies', 'whole wheat', 'super simple', 'fallback').recipePush();
    let langos = new Recipe('Langos', 'langos.html', 'bread-3', 'breads', 'fermentation', 'lean dough', 'fallback', 'freeze extra', 'special occassion').recipePush();
    let meatloaf = new Recipe('My Meatloaf', 'meatloaf.html', 'beef-1', 'beef', 'one pan', 'set/forget', 'breezy', 'fallback', 'Amber-approved').recipePush();
    let shortRibs = new Recipe('Red Wine Short Ribs', 'short-ribs.html', 'beef-3', 'beef', 'patience', 'low & slow', 'plan ahead', 'Amber-approved').recipePush();
    let shrimpBisque = new Recipe('Shrimp Bisque', 'shrimp-bisque.html', 'soup-3', 'soups', 'seafood', 'creamy soup', 'special occassion', 'very dairy').recipePush();
    let pannaCotta = new Recipe('Panna Cotta', 'panna-cotta.html', 'dessert-3', 'desserts', 'fallback', 'super simple', 'plan ahead', 'very dairy', 'Italian-ish', 'Summer').recipePush();
    let potLeek = new Recipe('Potato Leek Soup', 'potato-leek.html', 'soup-2', 'soups', 'Winter potage', 'creamy soup', 'super simple', 'very dairy').recipePush();
}

// FUNCTION CALLS
recipeCollector();
console.log(recipeArr);

/* END OBJECTS MODULE IMPORT */
/* ATTENTION */



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