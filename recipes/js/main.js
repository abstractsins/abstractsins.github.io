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
	$('.index-window').show();
}

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
    }
}

window.onscroll = () => { scrollFunction() };
/* END 0 -- Up Button */

/* 1 -- GLOBAL VARIABLES */
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
	dessert2: 'cookies',
	dessert3: 'panna-cotta'
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
$('#beef-1-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[0] + '.html')
})
$('#beef-2-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[1] + '.html')
})
$('#beef-3-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[2] + '.html')
})
$('#beef-4-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[0] + '.html')
})
$('#beef-5-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[1] + '.html')
})
$('#beef-6-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[2] + '.html')
})
$('#beef-7-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[0] + '.html')
})
$('#beef-8-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[1] + '.html')
})
$('#beef-9-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[2] + '.html')
})
$('#beef-10-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(beefArray[2] + '.html')
})

// BREADS
$('#bread-1-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[0] + '.html')
})
$('#bread-2-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[1] + '.html')
})
$('#bread-3-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[2] + '.html')
})
$('#bread-4-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[0] + '.html')
})
$('#bread-5-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[1] + '.html')
})
$('#bread-6-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[2] + '.html')
})
$('#bread-7-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[0] + '.html')
})
$('#bread-8-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[1] + '.html')
})
$('#bread-9-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[2] + '.html')
})
$('#bread-10-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(breadsArray[2] + '.html')
})

// DESSERTS
$('#dessert-1-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[0] + '.html')
})
$('#dessert-2-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[1] + '.html')
})
$('#dessert-3-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[2] + '.html')
})
$('#dessert-4-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[0] + '.html')
})
$('#dessert-5-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[1] + '.html')
})
$('#dessert-6-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[2] + '.html')
})
$('#dessert-7-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[0] + '.html')
})
$('#dessert-8-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[1] + '.html')
})
$('#dessert-9-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[2] + '.html')
})
$('#dessert-10-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(dessertsArray[2] + '.html')
})

// SOUPS
$('#soup-1-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[0] + '.html')
})
$('#soup-2-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[1] + '.html')
})
$('#soup-3-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[2] + '.html')
})
$('#soup-4-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[0] + '.html')
})
$('#soup-5-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[1] + '.html')
})
$('#soup-6-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[2] + '.html')
})
$('#soup-7-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[0] + '.html')
})
$('#soup-8-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[1] + '.html')
})
$('#soup-9-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[2] + '.html')
})
$('#soup-10-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(soupsArray[2] + '.html')
})
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

		advance();

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

jQuery(function async($){
	
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
	}

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

	});
/* END 4-B -- SLIDER INFO FUNCTIONS */

/* END 4 -- SLIDERS */

/* EXPERIMENTAL SECTION */

// Function for displaying tags without duplicates
const openIndex = (tag) => {
	$('.index-window').hide(); // hide the sidebar 
	$('.master-index-section').addClass('active'); // open recipe index below after clicking on a tag
	$('#master-index-container').load('master-index.html'); // load recipe index file into section
	let rand = Math.floor(Math.random() * 100) // testing
	console.log(`You pressed: ${tag}\nRandom Number: ${rand}`); // testing
}

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