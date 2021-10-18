// 100% hand-coded on Planet Earth

// TO-DO
// -- Make array(?) or slider IDs to refactor the unique lightslider calls below, into one.
// -- Make slides stop scrolling after clicking on a button
// -- add slider controls
// -- make buttons into directory with titles as buttons

/* TABLE OF CONTENTS */
	// 0 -- Up Button
	// 1 -- Global Variables
	// 1-A -- Slider Preview Objects
	// 2 -- Recipe Search Window Function
	// 3 -- Navigation
	// 3-A -- Index Links
	// 3-B -- Slider Links
	// 3-C -- Tab Browsing
	// 4 -- Sliders
	// 4-A -- Category Sliders
	// 4-A-1 -- Beef Slider
	// 4-A-2 -- Breads Slider
	// 4-A-3 -- Desserts Slider
	// 4-A-4 -- Seafood Slider
	// 4-A-5 -- Soups Slider
	//4-B -- Slider Information
/* END TABLE OF CONTENTS */

/* 0 -- Up Button */
/* Function for Up-Button */
const upBtn = document.getElementById('upBtn');

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For real browsers
}

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
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
console.log(beefArray)

// BREADS
let breads = {
	bread1: 'biscuits',
	bread2: 'challah',
	bread3: 'langos'
}
let breadsArray = Object.values(breads);
console.log(breadsArray)

// DESSERTS
let desserts = {
	dessert1: 'cannoli',
	dessert2: 'cookies',
	dessert3: 'panna-cotta'
}
let dessertsArray = Object.values(desserts);
console.log(dessertsArray)

// SEAFOOD
let seafood = {
	seafood1: 'shrimp-bisque',
	seafood2: 'salmon',
	seafood3: 'crab-cakes'
}
let seafoodArray = Object.values(seafood);
console.log(seafoodArray)

// SOUP
let soups = {
	soup1: 'cauliflower-soup',
	soup2: 'potato-leek',
	soup3: 'shrimp-bisque'
}
let soupsArray = Object.values(soups);
console.log(soupsArray)
/* END 1A -- Slider Preview Objects */

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
	// Red Wine Short Ribs
$('#challah-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('challah.html');
})
// D
// E
// F
// G
	// Gas Station Chili
$('#chili-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('chili.html');
})
// H
// I
// J
// K
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
	// Mushy Peas
$('#mushy-peas-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('mushy-peas.html');
})	
	// My Meatloaf
$('#meatloaf-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('meatloaf.html');
})
// N
// O
// P
	// Potato Leek Soup
$('#potato-leek-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('potato-leek.html');
})
	// Purple Mashed Potatoes
$('#purple-mash-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load('purple-mash.html');
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

// SEAFOOD
$('#seafood-1-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[0] + '.html')
})
$('#seafood-2-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[1] + '.html')
})
$('#seafood-3-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[2] + '.html')
})
$('#seafood-4-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[0] + '.html')
})
$('#seafood-5-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[1] + '.html')
})
$('#seafood-6-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[2] + '.html')
})
$('#seafood-7-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[0] + '.html')
})
$('#seafood-8-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[1] + '.html')
})
$('#seafood-9-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[2] + '.html')
})
$('#seafood-10-link').on('click', function() {
	$('.recipe-display-section').addClass('active');
	$('#recipe-display-container').load(seafoodArray[2] + '.html')
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
	/* 4-A-1 -- Beef Slider */
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

		if ($group.is(':animated') || currentIndex === newIndex ) { //|| $group.is(':hover')
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

	/* END 4-A-1 -- Beef Slider */

/* END 4-A Category Sliders */

/* 4-B -- SLIDER INFO FUNCTIONS */
// Takes information from the recipe pages and displays it in the homepage slider

	//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums
	//who is still helping people, even after his death

jQuery(function async($){

	/* BEEF */
	// Beef 1
    $('#beef-1-title').load(beefArray[0] + '.html #recipe-name');
	$('#beef-1-prep-time').load(beefArray[0] + '.html #prep-time');
	$('#beef-1-cook-time').load(beefArray[0] + '.html #cook-time');
	$('#beef-1-calories').load(beefArray[0] + '.html #calories');
	$('#beef-1-protein').load(beefArray[0] + '.html #protein');
	$('#beef-1-carbs').load(beefArray[0] + '.html #carbs');
	$('#beef-1-fat').load(beefArray[0] + '.html #fat');
	$('#beef-1-ingredients').load(beefArray[0] + '.html .shopping-item');
	$('#beef-1-hardware').load(beefArray[0] + '.html .hardware-item');
	$('#beef-1-tag-1').load(beefArray[0] + '.html #tag-1');
	$('#beef-1-tag-2').load(beefArray[0] + '.html #tag-2');
	$('#beef-1-tag-3').load(beefArray[0] + '.html #tag-3');
	$('#beef-1-tag-4').load(beefArray[0] + '.html #tag-4');
	$('#beef-1-tag-5').load(beefArray[0] + '.html #tag-5');
	$('#beef-1-tag-6').load(beefArray[0] + '.html #tag-6');
	$('#beef-1-tag-7').load(beefArray[0] + '.html #tag-7');
	$('#beef-1-tag-8').load(beefArray[0] + '.html #tag-8');
	$('#beef-1-tag-9').load(beefArray[0] + '.html #tag-9');
	$('#beef-1-tag-10').load(beefArray[0] + '.html #tag-10');
    // Beef 2
    $('#beef-2-title').load(beefArray[1] + '.html #recipe-name');
	$('#beef-2-prep-time').load(beefArray[1] + '.html #prep-time');
	$('#beef-2-cook-time').load(beefArray[1] + '.html #cook-time');
	$('#beef-2-calories').load(beefArray[1] + '.html #calories');
	$('#beef-2-protein').load(beefArray[1] + '.html #protein');
	$('#beef-2-carbs').load(beefArray[1] + '.html #carbs');
	$('#beef-2-fat').load(beefArray[1] + '.html #fat');
	$('#beef-2-ingredients').load(beefArray[1] + '.html .shopping-item');
	$('#beef-2-hardware').load(beefArray[1] + '.html .hardware-item');
	$('#beef-2-tag-1').load(beefArray[1] + '.html #tag-1');
	$('#beef-2-tag-2').load(beefArray[1] + '.html #tag-2');
	$('#beef-2-tag-3').load(beefArray[1] + '.html #tag-3');
	$('#beef-2-tag-4').load(beefArray[1] + '.html #tag-4');
	$('#beef-2-tag-5').load(beefArray[1] + '.html #tag-5');
	$('#beef-2-tag-6').load(beefArray[1] + '.html #tag-6');
	$('#beef-2-tag-7').load(beefArray[1] + '.html #tag-7');
	$('#beef-2-tag-8').load(beefArray[1] + '.html #tag-8');
	$('#beef-2-tag-9').load(beefArray[1] + '.html #tag-9');
	$('#beef-2-tag-10').load(beefArray[1] + '.html #tag-10');
	// Beef 3 
    $('#beef-3-title').load(beefArray[2] + '.html #recipe-name');
	$('#beef-3-prep-time').load(beefArray[2] + '.html #prep-time');
	$('#beef-3-cook-time').load(beefArray[2] + '.html #cook-time');
	$('#beef-3-calories').load(beefArray[2] + '.html #calories');
	$('#beef-3-protein').load(beefArray[2] + '.html #protein');
	$('#beef-3-carbs').load(beefArray[2] + '.html #carbs');
	$('#beef-3-fat').load(beefArray[2] + '.html #fat');
	$('#beef-3-ingredients').load(beefArray[2] + '.html .shopping-item');
	$('#beef-3-hardware').load(beefArray[2] + '.html .hardware-item');
	$('#beef-3-tag-1').load(beefArray[2] + '.html #tag-1');
	$('#beef-3-tag-2').load(beefArray[2] + '.html #tag-2');
	$('#beef-3-tag-3').load(beefArray[2] + '.html #tag-3');
	$('#beef-3-tag-4').load(beefArray[2] + '.html #tag-4');
	$('#beef-3-tag-5').load(beefArray[2] + '.html #tag-5');
	$('#beef-3-tag-6').load(beefArray[2] + '.html #tag-6');
	$('#beef-3-tag-7').load(beefArray[2] + '.html #tag-7');
	$('#beef-3-tag-8').load(beefArray[2] + '.html #tag-8');
	$('#beef-3-tag-9').load(beefArray[2] + '.html #tag-9');
	$('#beef-3-tag-10').load(beefArray[2] + '.html #tag-10');

	/* BREADS */
    // Bread 1
	$('#bread-1-title').load(breadsArray[0] + '.html #recipe-name');
	$('#bread-1-prep-time').load(breadsArray[0] + '.html #prep-time');
	$('#bread-1-cook-time').load(breadsArray[0] + '.html #cook-time');
	$('#bread-1-calories').load(breadsArray[0] + '.html #calories');
	$('#bread-1-protein').load(breadsArray[0] + '.html #protein');
	$('#bread-1-carbs').load(breadsArray[0] + '.html #carbs');
	$('#bread-1-fat').load(breadsArray[0] + '.html #fat');
	$('#bread-1-ingredients').load(breadsArray[0] + '.html .shopping-item');
	$('#bread-1-hardware').load(breadsArray[0] + '.html .hardware-item');
	$('#bread-1-tag-1').load(breadsArray[0] + '.html #tag-1');
	$('#bread-1-tag-2').load(breadsArray[0] + '.html #tag-2');
	$('#bread-1-tag-3').load(breadsArray[0] + '.html #tag-3');
	$('#bread-1-tag-4').load(breadsArray[0] + '.html #tag-4');
	$('#bread-1-tag-5').load(breadsArray[0] + '.html #tag-5');
	$('#bread-1-tag-6').load(breadsArray[0] + '.html #tag-6');
	$('#bread-1-tag-7').load(breadsArray[0] + '.html #tag-7');
	$('#bread-1-tag-8').load(breadsArray[0] + '.html #tag-8');
	$('#bread-1-tag-9').load(breadsArray[0] + '.html #tag-9');
	$('#bread-1-tag-10').load(breadsArray[0] + '.html #tag-10');
	// Bread 2
	$('#bread-2-title').load(breadsArray[1] + '.html #recipe-name');
	$('#bread-2-prep-time').load(breadsArray[1] + '.html #prep-time');
	$('#bread-2-cook-time').load(breadsArray[1] + '.html #cook-time');
	$('#bread-2-calories').load(breadsArray[1] + '.html #calories');
	$('#bread-2-protein').load(breadsArray[1] + '.html #protein');
	$('#bread-2-carbs').load(breadsArray[1] + '.html #carbs');
	$('#bread-2-fat').load(breadsArray[1] + '.html #fat');
	$('#bread-2-ingredients').load(breadsArray[1] + '.html .shopping-item');
	$('#bread-2-hardware').load(breadsArray[1] + '.html .hardware-item');
	$('#bread-2-tag-1').load(breadsArray[1] + '.html #tag-1');
	$('#bread-2-tag-2').load(breadsArray[1] + '.html #tag-2');
	$('#bread-2-tag-3').load(breadsArray[1] + '.html #tag-3');
	$('#bread-2-tag-4').load(breadsArray[1] + '.html #tag-4');
	$('#bread-2-tag-5').load(breadsArray[1] + '.html #tag-5');
	$('#bread-2-tag-6').load(breadsArray[1] + '.html #tag-6');
	$('#bread-2-tag-7').load(breadsArray[1] + '.html #tag-7');
	$('#bread-2-tag-8').load(breadsArray[1] + '.html #tag-8');
	$('#bread-2-tag-9').load(breadsArray[1] + '.html #tag-9');
	$('#bread-2-tag-10').load(breadsArray[1] + '.html #tag-10');
	// Bread 3
	$('#bread-3-title').load(breadsArray[2] + '.html #recipe-name');
	$('#bread-3-prep-time').load(breadsArray[2] + '.html #prep-time');
	$('#bread-3-cook-time').load(breadsArray[2] + '.html #cook-time');
	$('#bread-3-calories').load(breadsArray[2] + '.html #calories');
	$('#bread-3-protein').load(breadsArray[2] + '.html #protein');
	$('#bread-3-carbs').load(breadsArray[2] + '.html #carbs');
	$('#bread-3-fat').load(breadsArray[2] + '.html #fat');
	$('#bread-3-ingredients').load(breadsArray[2] + '.html .shopping-item');
	$('#bread-3-hardware').load(breadsArray[2] + '.html .hardware-item');
	$('#bread-3-tag-1').load(breadsArray[2] + '.html #tag-1');
	$('#bread-3-tag-2').load(breadsArray[2] + '.html #tag-2');
	$('#bread-3-tag-3').load(breadsArray[2] + '.html #tag-3');
	$('#bread-3-tag-4').load(breadsArray[2] + '.html #tag-4');
	$('#bread-3-tag-5').load(breadsArray[2] + '.html #tag-5');
	$('#bread-3-tag-6').load(breadsArray[2] + '.html #tag-6');
	$('#bread-3-tag-7').load(breadsArray[2] + '.html #tag-7');
	$('#bread-3-tag-8').load(breadsArray[2] + '.html #tag-8');
	$('#bread-3-tag-9').load(breadsArray[2] + '.html #tag-9');
	$('#bread-3-tag-10').load(breadsArray[2] + '.html #tag-10');

	/* DESSERTS */
    // Dessert 1
	$('#dessert-1-title').load(dessertsArray[0] + '.html #recipe-name');
	$('#dessert-1-prep-time').load(dessertsArray[0] + '.html #prep-time');
	$('#dessert-1-cook-time').load(dessertsArray[0] + '.html #cook-time');
	$('#dessert-1-calories').load(dessertsArray[0] + '.html #calories');
	$('#dessert-1-protein').load(dessertsArray[0] + '.html #protein');
	$('#dessert-1-carbs').load(dessertsArray[0] + '.html #carbs');
	$('#dessert-1-fat').load(dessertsArray[0] + '.html #fat');
	$('#dessert-1-ingredients').load(dessertsArray[0] + '.html .shopping-item');
	$('#dessert-1-hardware').load(dessertsArray[0] + '.html .hardware-item');
	$('#dessert-1-tag-1').load(dessertsArray[0] + '.html #tag-1');
	$('#dessert-1-tag-2').load(dessertsArray[0] + '.html #tag-2');
	$('#dessert-1-tag-3').load(dessertsArray[0] + '.html #tag-1');
	$('#dessert-1-tag-4').load(dessertsArray[0] + '.html #tag-4');
	$('#dessert-1-tag-5').load(dessertsArray[0] + '.html #tag-5');
	$('#dessert-1-tag-6').load(dessertsArray[0] + '.html #tag-6');
	$('#dessert-1-tag-7').load(dessertsArray[0] + '.html #tag-7');
	$('#dessert-1-tag-8').load(dessertsArray[0] + '.html #tag-8');
	$('#dessert-1-tag-9').load(dessertsArray[0] + '.html #tag-9');
	$('#dessert-1-tag-10').load(dessertsArray[0] + '.html #tag-10');
	// Dessert 2
	$('#dessert-2-title').load(dessertsArray[1] + '.html #recipe-name');
	$('#dessert-2-prep-time').load(dessertsArray[1] + '.html #prep-time');
	$('#dessert-2-cook-time').load(dessertsArray[1] + '.html #cook-time');
	$('#dessert-2-calories').load(dessertsArray[1] + '.html #calories');
	$('#dessert-2-protein').load(dessertsArray[1] + '.html #protein');
	$('#dessert-2-carbs').load(dessertsArray[1] + '.html #carbs');
	$('#dessert-2-fat').load(dessertsArray[1] + '.html #fat');
	$('#dessert-2-ingredients').load(dessertsArray[1] + '.html .shopping-item');
	$('#dessert-2-hardware').load(dessertsArray[1] + '.html .hardware-item');
	$('#dessert-2-tag-1').load(dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-2').load(dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-3').load(dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-4').load(dessertsArray[1] + '.html #tag-4');
	$('#dessert-2-tag-5').load(dessertsArray[1] + '.html #tag-5');
	$('#dessert-2-tag-6').load(dessertsArray[1] + '.html #tag-6');
	$('#dessert-2-tag-7').load(dessertsArray[1] + '.html #tag-7');
	$('#dessert-2-tag-8').load(dessertsArray[1] + '.html #tag-8');
	$('#dessert-2-tag-9').load(dessertsArray[1] + '.html #tag-9');
	$('#dessert-2-tag-10').load(dessertsArray[1] + '.html #tag-10');
	// Dessert 3
	$('#dessert-3-tag-1').load(dessertsArray[2] + '.html #tag-1');
	$('#dessert-3-tag-2').load(dessertsArray[2] + '.html #tag-2');
	$('#dessert-3-tag-3').load(dessertsArray[2] + '.html #tag-3');
	$('#dessert-3-tag-4').load(dessertsArray[2] + '.html #tag-4');
	$('#dessert-3-tag-5').load(dessertsArray[2] + '.html #tag-5');
	$('#dessert-3-tag-6').load(dessertsArray[2] + '.html #tag-6');
	$('#dessert-3-tag-7').load(dessertsArray[2] + '.html #tag-7');
	$('#dessert-3-tag-8').load(dessertsArray[2] + '.html #tag-8');
	$('#dessert-3-tag-9').load(dessertsArray[2] + '.html #tag-9');
	$('#dessert-3-tag-10').load(dessertsArray[2] + '.html #tag-10');
	$('#dessert-3-title').load(dessertsArray[2] + '.html #recipe-name');
	$('#dessert-3-prep-time').load(dessertsArray[2] + '.html #prep-time');
	$('#dessert-3-cook-time').load(dessertsArray[2] + '.html #cook-time');
	$('#dessert-3-calories').load(dessertsArray[2] + '.html #calories');
	$('#dessert-3-protein').load(dessertsArray[2] + '.html #protein');
	$('#dessert-3-carbs').load(dessertsArray[2] + '.html #carbs');
	$('#dessert-3-fat').load(dessertsArray[2] + '.html #fat');
	$('#dessert-3-ingredients').load(dessertsArray[2] + '.html .shopping-item');
	$('#dessert-3-hardware').load(dessertsArray[2] + '.html .hardware-item');

	/* Seafood */
    // Seafood 1
	$('#seafood-1-title').load(seafoodArray[0] + '.html #recipe-name');
	$('#seafood-1-prep-time').load(seafoodArray[0] + '.html #prep-time');
	$('#seafood-1-cook-time').load(seafoodArray[0] + '.html #cook-time');
	$('#seafood-1-calories').load(seafoodArray[0] + '.html #calories');
	$('#seafood-1-protein').load(seafoodArray[0] + '.html #protein');
	$('#seafood-1-carbs').load(seafoodArray[0] + '.html #carbs');
	$('#seafood-1-fat').load(seafoodArray[0] + '.html #fat');
	$('#seafood-1-ingredients').load(seafoodArray[0] + '.html .shopping-item');
	$('#seafood-1-hardware').load(seafoodArray[0] + '.html .hardware-item');
	$('#seafood-1-tag-1').load(seafoodArray[0] + '.html #tag-1');
	$('#seafood-1-tag-2').load(seafoodArray[0] + '.html #tag-2');
	$('#seafood-1-tag-3').load(seafoodArray[0] + '.html #tag-3');
	$('#seafood-1-tag-4').load(seafoodArray[0] + '.html #tag-4');
	$('#seafood-1-tag-5').load(seafoodArray[0] + '.html #tag-5');
	$('#seafood-1-tag-6').load(seafoodArray[0] + '.html #tag-6');
	$('#seafood-1-tag-7').load(seafoodArray[0] + '.html #tag-7');
	$('#seafood-1-tag-8').load(seafoodArray[0] + '.html #tag-8');
	$('#seafood-1-tag-9').load(seafoodArray[0] + '.html #tag-9');
	$('#seafood-1-tag-10').load(seafoodArray[0] + '.html #tag-10');
	// Seafood 2
	$('#seafood-2-title').load(seafoodArray[1] + '.html #recipe-name');
	$('#seafood-2-prep-time').load(seafoodArray[1] + '.html #prep-time');
	$('#seafood-2-cook-time').load(seafoodArray[1] + '.html #cook-time');
	$('#seafood-2-calories').load(seafoodArray[1] + '.html #calories');
	$('#seafood-2-protein').load(seafoodArray[1] + '.html #protein');
	$('#seafood-2-carbs').load(seafoodArray[1] + '.html #carbs');
	$('#seafood-2-fat').load(seafoodArray[1] + '.html #fat');
	$('#seafood-2-ingredients').load(seafoodArray[1] + '.html .shopping-item');
	$('#seafood-2-hardware').load(seafoodArray[1] + '.html .hardware-item');
	$('#seafood-2-tag-1').load(seafoodArray[1] + '.html #tag-1');
	$('#seafood-2-tag-2').load(seafoodArray[1] + '.html #tag-2');
	$('#seafood-2-tag-3').load(seafoodArray[1] + '.html #tag-3');
	$('#seafood-2-tag-4').load(seafoodArray[1] + '.html #tag-4');
	$('#seafood-2-tag-5').load(seafoodArray[1] + '.html #tag-5');
	$('#seafood-2-tag-6').load(seafoodArray[1] + '.html #tag-6');
	$('#seafood-2-tag-7').load(seafoodArray[1] + '.html #tag-7');
	$('#seafood-2-tag-8').load(seafoodArray[1] + '.html #tag-8');
	$('#seafood-2-tag-9').load(seafoodArray[1] + '.html #tag-9');
	$('#seafood-2-tag-10').load(seafoodArray[1] + '.html #tag-10');
	// Seafood 3
	$('#seafood-3-title').load(seafoodArray[2] + '.html #recipe-name');
	$('#seafood-3-prep-time').load(seafoodArray[2] + '.html #prep-time');
	$('#seafood-3-cook-time').load(seafoodArray[2] + '.html #cook-time');
	$('#seafood-3-calories').load(seafoodArray[2] + '.html #calories');
	$('#seafood-3-protein').load(seafoodArray[2] + '.html #protein');
	$('#seafood-3-carbs').load(seafoodArray[2] + '.html #carbs');
	$('#seafood-3-fat').load(seafoodArray[2] + '.html #fat');
	$('#seafood-3-ingredients').load(seafoodArray[2] + '.html .shopping-item');
	$('#seafood-3-hardware').load(seafoodArray[2] + '.html .hardware-item');
	$('#seafood-3-tag-1').load(seafoodArray[2] + '.html #tag-1');
	$('#seafood-3-tag-2').load(seafoodArray[2] + '.html #tag-2');
	$('#seafood-3-tag-3').load(seafoodArray[2] + '.html #tag-3');
	$('#seafood-3-tag-4').load(seafoodArray[2] + '.html #tag-4');
	$('#seafood-3-tag-5').load(seafoodArray[2] + '.html #tag-5');
	$('#seafood-3-tag-6').load(seafoodArray[2] + '.html #tag-6');
	$('#seafood-3-tag-7').load(seafoodArray[2] + '.html #tag-7');
	$('#seafood-3-tag-8').load(seafoodArray[2] + '.html #tag-8');
	$('#seafood-3-tag-9').load(seafoodArray[2] + '.html #tag-9');
	$('#seafood-3-tag-10').load(seafoodArray[2] + '.html #tag-10');

	/* Soups */
    // Soup 1
	$('#soup-1-title').load(soupsArray[0] + '.html #recipe-name');
	$('#soup-1-prep-time').load(soupsArray[0] + '.html #prep-time');
	$('#soup-1-cook-time').load(soupsArray[0] + '.html #cook-time');
	$('#soup-1-calories').load(soupsArray[0] + '.html #calories');
	$('#soup-1-protein').load(soupsArray[0] + '.html #protein');
	$('#soup-1-carbs').load(soupsArray[0] + '.html #carbs');
	$('#soup-1-fat').load(soupsArray[0] + '.html #fat');
	$('#soup-1-ingredients').load(soupsArray[0] + '.html .shopping-item');
	$('#soup-1-hardware').load(soupsArray[0] + '.html .hardware-item');
	$('#soup-1-tag-1').load(soupsArray[0] + '.html #tag-1');
	$('#soup-1-tag-2').load(soupsArray[0] + '.html #tag-2');
	$('#soup-1-tag-3').load(soupsArray[0] + '.html #tag-3');
	$('#soup-1-tag-4').load(soupsArray[0] + '.html #tag-4');
	$('#soup-1-tag-5').load(soupsArray[0] + '.html #tag-5');
	$('#soup-1-tag-6').load(soupsArray[0] + '.html #tag-6');
	$('#soup-1-tag-7').load(soupsArray[0] + '.html #tag-7');
	$('#soup-1-tag-8').load(soupsArray[0] + '.html #tag-8');
	$('#soup-1-tag-9').load(soupsArray[0] + '.html #tag-9');
	$('#soup-1-tag-10').load(soupsArray[0] + '.html #tag-10');
	// Soup 2
	$('#soup-2-title').load(soupsArray[1] + '.html #recipe-name');
	$('#soup-2-prep-time').load(soupsArray[1] + '.html #prep-time');
	$('#soup-2-cook-time').load(soupsArray[1] + '.html #cook-time');
	$('#soup-2-calories').load(soupsArray[1] + '.html #calories');
	$('#soup-2-protein').load(soupsArray[1] + '.html #protein');
	$('#soup-2-carbs').load(soupsArray[1] + '.html #carbs');
	$('#soup-2-fat').load(soupsArray[1] + '.html #fat');
	$('#soup-2-ingredients').load(soupsArray[1] + '.html .shopping-item');
	$('#soup-2-hardware').load(soupsArray[1] + '.html .hardware-item');
	$('#soup-2-tag-1').load(soupsArray[1] + '.html #tag-1');
	$('#soup-2-tag-2').load(soupsArray[1] + '.html #tag-2');
	$('#soup-2-tag-3').load(soupsArray[1] + '.html #tag-3');
	$('#soup-2-tag-4').load(soupsArray[1] + '.html #tag-4');
	$('#soup-2-tag-5').load(soupsArray[1] + '.html #tag-5');
	$('#soup-2-tag-6').load(soupsArray[1] + '.html #tag-6');
	$('#soup-2-tag-7').load(soupsArray[1] + '.html #tag-7');
	$('#soup-2-tag-8').load(soupsArray[1] + '.html #tag-8');
	$('#soup-2-tag-9').load(soupsArray[1] + '.html #tag-9');
	$('#soup-2-tag-10').load(soupsArray[1] + '.html #tag-10');
	// Soup 3
	$('#soup-3-title').load(soupsArray[2] + '.html #recipe-name');
	$('#soup-3-prep-time').load(soupsArray[2] + '.html #prep-time');
	$('#soup-3-cook-time').load(soupsArray[2] + '.html #cook-time');
	$('#soup-3-calories').load(soupsArray[2] + '.html #calories');
	$('#soup-3-protein').load(soupsArray[2] + '.html #protein');
	$('#soup-3-carbs').load(soupsArray[2] + '.html #carbs');
	$('#soup-3-fat').load(soupsArray[2] + '.html #fat');
	$('#soup-3-ingredients').load(soupsArray[2] + '.html .shopping-item');
	$('#soup-3-hardware').load(soupsArray[2] + '.html .hardware-item');
	$('#soup-3-tag-1').load(soupsArray[2] + '.html #tag-1');
	$('#soup-3-tag-2').load(soupsArray[2] + '.html #tag-2');
	$('#soup-3-tag-3').load(soupsArray[2] + '.html #tag-3');
	$('#soup-3-tag-4').load(soupsArray[2] + '.html #tag-4');
	$('#soup-3-tag-5').load(soupsArray[2] + '.html #tag-5');
	$('#soup-3-tag-6').load(soupsArray[2] + '.html #tag-6');
	$('#soup-3-tag-7').load(soupsArray[2] + '.html #tag-7');
	$('#soup-3-tag-8').load(soupsArray[2] + '.html #tag-8');
	$('#soup-3-tag-9').load(soupsArray[2] + '.html #tag-9');
	$('#soup-3-tag-10').load(soupsArray[2] + '.html #tag-10');
});
/* END 4-B -- SLIDER INFO FUNCTIONS */

/* END 4 -- SLIDERS */





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