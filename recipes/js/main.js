// 100% hand-coded on Planet Earth

// TO-DO
// -- Make array(?) or slider IDs to refactor the unique lightslider calls below, into one.
// -- Make slides stop scrolling after clicking on a button
// -- add slider controls
// -- make buttons into directory with titles as buttons

/* TABLE OF CONTENTS */
// 1 -- Recipe Search Window Function

/* 1 -- Recipe Search Window Function */
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




/* TITLE variables for repetition */
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
	dessert3: 'dessert-3'
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
	soup3: 'mushroom-barley'
}
let soupsArray = Object.values(soups);
console.log(soupsArray)

/* RECIPE CARD INFO FUNCTION */
// Takes information from the recipe pages and displays it in the homepage cards

//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums
//who is still helping people, even after his death
jQuery(function async($){

	/* BEEF */
	// Beef 1
    $('#beef-1-title').load('assets/recipes/' + beefArray[0] + '.html #recipe-name');
	$('#beef-1-prep-time').load('assets/recipes/' + beefArray[0] + '.html #prep-time');
	$('#beef-1-cook-time').load('assets/recipes/' + beefArray[0] + '.html #cook-time');
	$('#beef-1-calories').load('assets/recipes/' + beefArray[0] + '.html #calories');
	$('#beef-1-protein').load('assets/recipes/' + beefArray[0] + '.html #protein');
	$('#beef-1-carbs').load('assets/recipes/' + beefArray[0] + '.html #carbs');
	$('#beef-1-fat').load('assets/recipes/' + beefArray[0] + '.html #fat');
	$('#beef-1-ingredients').load('assets/recipes/' + beefArray[0] + '.html #shopping-list');
	$('#beef-1-hardware').load('assets/recipes/' + beefArray[0] + '.html #hardware-list');
	$('#beef-1-tag-1').load('assets/recipes/' + beefArray[0] + '.html #tag-1');
	$('#beef-1-tag-2').load('assets/recipes/' + beefArray[0] + '.html #tag-2');
	$('#beef-1-tag-3').load('assets/recipes/' + beefArray[0] + '.html #tag-3');
	$('#beef-1-tag-4').load('assets/recipes/' + beefArray[0] + '.html #tag-4');
	$('#beef-1-tag-5').load('assets/recipes/' + beefArray[0] + '.html #tag-5');
	$('#beef-1-tag-6').load('assets/recipes/' + beefArray[0] + '.html #tag-6');
	$('#beef-1-tag-7').load('assets/recipes/' + beefArray[0] + '.html #tag-7');
	$('#beef-1-tag-8').load('assets/recipes/' + beefArray[0] + '.html #tag-8');
	$('#beef-1-tag-9').load('assets/recipes/' + beefArray[0] + '.html #tag-9');
	$('#beef-1-tag-10').load('assets/recipes/' + beefArray[0] + '.html #tag-10');
    // Beef 2
    $('#beef-2-title').load('assets/recipes/' + beefArray[1] + '.html #recipe-name');
	$('#beef-2-prep-time').load('assets/recipes/' + beefArray[1] + '.html #prep-time');
	$('#beef-2-cook-time').load('assets/recipes/' + beefArray[1] + '.html #cook-time');
	$('#beef-2-calories').load('assets/recipes/' + beefArray[1] + '.html #calories');
	$('#beef-2-protein').load('assets/recipes/' + beefArray[1] + '.html #protein');
	$('#beef-2-carbs').load('assets/recipes/' + beefArray[1] + '.html #carbs');
	$('#beef-2-fat').load('assets/recipes/' + beefArray[1] + '.html #fat');
	$('#beef-2-ingredients').load('assets/recipes/' + beefArray[1] + '.html #shopping-list');
	$('#beef-2-hardware').load('assets/recipes/' + beefArray[1] + '.html #hardware-list');
	$('#beef-2-tag-1').load('assets/recipes/' + beefArray[1] + '.html #tag-1');
	$('#beef-2-tag-2').load('assets/recipes/' + beefArray[1] + '.html #tag-2');
	$('#beef-2-tag-3').load('assets/recipes/' + beefArray[1] + '.html #tag-3');
	$('#beef-2-tag-4').load('assets/recipes/' + beefArray[1] + '.html #tag-4');
	$('#beef-2-tag-5').load('assets/recipes/' + beefArray[1] + '.html #tag-5');
	$('#beef-2-tag-6').load('assets/recipes/' + beefArray[1] + '.html #tag-6');
	$('#beef-2-tag-7').load('assets/recipes/' + beefArray[1] + '.html #tag-7');
	$('#beef-2-tag-8').load('assets/recipes/' + beefArray[1] + '.html #tag-8');
	$('#beef-2-tag-9').load('assets/recipes/' + beefArray[1] + '.html #tag-9');
	$('#beef-2-tag-10').load('assets/recipes/' + beefArray[1] + '.html #tag-10');
	// Beef 3 
    $('#beef-3-title').load('assets/recipes/' + beefArray[2] + '.html #recipe-name');
	$('#beef-3-prep-time').load('assets/recipes/' + beefArray[2] + '.html #prep-time');
	$('#beef-3-cook-time').load('assets/recipes/' + beefArray[2] + '.html #cook-time');
	$('#beef-3-calories').load('assets/recipes/' + beefArray[2] + '.html #calories');
	$('#beef-3-protein').load('assets/recipes/' + beefArray[2] + '.html #protein');
	$('#beef-3-carbs').load('assets/recipes/' + beefArray[2] + '.html #carbs');
	$('#beef-3-fat').load('assets/recipes/' + beefArray[2] + '.html #fat');
	$('#beef-3-ingredients').load('assets/recipes/' + beefArray[2] + '.html #shopping-list');
	$('#beef-3-hardware').load('assets/recipes/' + beefArray[2] + '.html #hardware-list');
	$('#beef-3-tag-1').load('assets/recipes/' + beefArray[2] + '.html #tag-1');
	$('#beef-3-tag-2').load('assets/recipes/' + beefArray[2] + '.html #tag-2');
	$('#beef-3-tag-3').load('assets/recipes/' + beefArray[2] + '.html #tag-3');
	$('#beef-3-tag-4').load('assets/recipes/' + beefArray[2] + '.html #tag-4');
	$('#beef-3-tag-5').load('assets/recipes/' + beefArray[2] + '.html #tag-5');
	$('#beef-3-tag-6').load('assets/recipes/' + beefArray[2] + '.html #tag-6');
	$('#beef-3-tag-7').load('assets/recipes/' + beefArray[2] + '.html #tag-7');
	$('#beef-3-tag-8').load('assets/recipes/' + beefArray[2] + '.html #tag-8');
	$('#beef-3-tag-9').load('assets/recipes/' + beefArray[2] + '.html #tag-9');
	$('#beef-3-tag-10').load('assets/recipes/' + beefArray[2] + '.html #tag-10');

	/* BREADS */
    // Bread 1
	$('#bread-1-title').load('assets/recipes/' + breadsArray[0] + '.html #recipe-name');
	$('#bread-1-prep-time').load('assets/recipes/' + breadsArray[0] + '.html #prep-time');
	$('#bread-1-cook-time').load('assets/recipes/' + breadsArray[0] + '.html #cook-time');
	$('#bread-1-calories').load('assets/recipes/' + breadsArray[0] + '.html #calories');
	$('#bread-1-protein').load('assets/recipes/' + breadsArray[0] + '.html #protein');
	$('#bread-1-carbs').load('assets/recipes/' + breadsArray[0] + '.html #carbs');
	$('#bread-1-fat').load('assets/recipes/' + breadsArray[0] + '.html #fat');
	$('#bread-1-ingredients').load('assets/recipes/' + breadsArray[0] + '.html #shopping-list');
	$('#bread-1-hardware').load('assets/recipes/' + breadsArray[0] + '.html #hardware-list');
	$('#bread-1-tag-1').load('assets/recipes/' + breadsArray[0] + '.html #tag-1');
	$('#bread-1-tag-2').load('assets/recipes/' + breadsArray[0] + '.html #tag-2');
	$('#bread-1-tag-3').load('assets/recipes/' + breadsArray[0] + '.html #tag-3');
	$('#bread-1-tag-4').load('assets/recipes/' + breadsArray[0] + '.html #tag-4');
	$('#bread-1-tag-5').load('assets/recipes/' + breadsArray[0] + '.html #tag-5');
	$('#bread-1-tag-6').load('assets/recipes/' + breadsArray[0] + '.html #tag-6');
	$('#bread-1-tag-7').load('assets/recipes/' + breadsArray[0] + '.html #tag-7');
	$('#bread-1-tag-8').load('assets/recipes/' + breadsArray[0] + '.html #tag-8');
	$('#bread-1-tag-9').load('assets/recipes/' + breadsArray[0] + '.html #tag-9');
	$('#bread-1-tag-10').load('assets/recipes/' + breadsArray[0] + '.html #tag-10');
	// Bread 2
	$('#bread-2-title').load('assets/recipes/' + breadsArray[1] + '.html #recipe-name');
	$('#bread-2-prep-time').load('assets/recipes/' + breadsArray[1] + '.html #prep-time');
	$('#bread-2-cook-time').load('assets/recipes/' + breadsArray[1] + '.html #cook-time');
	$('#bread-2-calories').load('assets/recipes/' + breadsArray[1] + '.html #calories');
	$('#bread-2-protein').load('assets/recipes/' + breadsArray[1] + '.html #protein');
	$('#bread-2-carbs').load('assets/recipes/' + breadsArray[1] + '.html #carbs');
	$('#bread-2-fat').load('assets/recipes/' + breadsArray[1] + '.html #fat');
	$('#bread-2-ingredients').load('assets/recipes/' + breadsArray[1] + '.html #shopping-list');
	$('#bread-2-hardware').load('assets/recipes/' + breadsArray[1] + '.html #hardware-list');
	$('#bread-2-tag-1').load('assets/recipes/' + breadsArray[1] + '.html #tag-1');
	$('#bread-2-tag-2').load('assets/recipes/' + breadsArray[1] + '.html #tag-2');
	$('#bread-2-tag-3').load('assets/recipes/' + breadsArray[1] + '.html #tag-3');
	$('#bread-2-tag-4').load('assets/recipes/' + breadsArray[1] + '.html #tag-4');
	$('#bread-2-tag-5').load('assets/recipes/' + breadsArray[1] + '.html #tag-5');
	$('#bread-2-tag-6').load('assets/recipes/' + breadsArray[1] + '.html #tag-6');
	$('#bread-2-tag-7').load('assets/recipes/' + breadsArray[1] + '.html #tag-7');
	$('#bread-2-tag-8').load('assets/recipes/' + breadsArray[1] + '.html #tag-8');
	$('#bread-2-tag-9').load('assets/recipes/' + breadsArray[1] + '.html #tag-9');
	$('#bread-2-tag-10').load('assets/recipes/' + breadsArray[1] + '.html #tag-10');
	// Bread 3
	$('#bread-3-title').load('assets/recipes/' + breadsArray[2] + '.html #recipe-name');
	$('#bread-3-prep-time').load('assets/recipes/' + breadsArray[2] + '.html #prep-time');
	$('#bread-3-cook-time').load('assets/recipes/' + breadsArray[2] + '.html #cook-time');
	$('#bread-3-calories').load('assets/recipes/' + breadsArray[2] + '.html #calories');
	$('#bread-3-protein').load('assets/recipes/' + breadsArray[2] + '.html #protein');
	$('#bread-3-carbs').load('assets/recipes/' + breadsArray[2] + '.html #carbs');
	$('#bread-3-fat').load('assets/recipes/' + breadsArray[2] + '.html #fat');
	$('#bread-3-ingredients').load('assets/recipes/' + breadsArray[2] + '.html #shopping-list');
	$('#bread-3-hardware').load('assets/recipes/' + breadsArray[2] + '.html #hardware-list');
	$('#bread-3-tag-1').load('assets/recipes/' + breadsArray[2] + '.html #tag-1');
	$('#bread-3-tag-2').load('assets/recipes/' + breadsArray[2] + '.html #tag-2');
	$('#bread-3-tag-3').load('assets/recipes/' + breadsArray[2] + '.html #tag-3');
	$('#bread-3-tag-4').load('assets/recipes/' + breadsArray[2] + '.html #tag-4');
	$('#bread-3-tag-5').load('assets/recipes/' + breadsArray[2] + '.html #tag-5');
	$('#bread-3-tag-6').load('assets/recipes/' + breadsArray[2] + '.html #tag-6');
	$('#bread-3-tag-7').load('assets/recipes/' + breadsArray[2] + '.html #tag-7');
	$('#bread-3-tag-8').load('assets/recipes/' + breadsArray[2] + '.html #tag-8');
	$('#bread-3-tag-9').load('assets/recipes/' + breadsArray[2] + '.html #tag-9');
	$('#bread-3-tag-10').load('assets/recipes/' + breadsArray[2] + '.html #tag-10');

	/* DESSERTS */
    // Dessert 1
	$('#dessert-1-title').load('assets/recipes/' + dessertsArray[0] + '.html #recipe-name');
	$('#dessert-1-prep-time').load('assets/recipes/' + dessertsArray[0] + '.html #prep-time');
	$('#dessert-1-cook-time').load('assets/recipes/' + dessertsArray[0] + '.html #cook-time');
	$('#dessert-1-calories').load('assets/recipes/' + dessertsArray[0] + '.html #calories');
	$('#dessert-1-protein').load('assets/recipes/' + dessertsArray[0] + '.html #protein');
	$('#dessert-1-carbs').load('assets/recipes/' + dessertsArray[0] + '.html #carbs');
	$('#dessert-1-fat').load('assets/recipes/' + dessertsArray[0] + '.html #fat');
	$('#dessert-1-ingredients').load('assets/recipes/' + dessertsArray[0] + '.html #shopping-list');
	$('#dessert-1-hardware').load('assets/recipes/' + dessertsArray[0] + '.html #hardware-list');
	$('#dessert-1-tag-1').load('assets/recipes/' + dessertsArray[2] + '.html #tag-1');
	$('#dessert-1-tag-2').load('assets/recipes/' + dessertsArray[2] + '.html #tag-2');
	$('#dessert-1-tag-3').load('assets/recipes/' + dessertsArray[2] + '.html #tag-1');
	$('#dessert-1-tag-4').load('assets/recipes/' + dessertsArray[2] + '.html #tag-4');
	$('#dessert-1-tag-5').load('assets/recipes/' + dessertsArray[2] + '.html #tag-5');
	$('#dessert-1-tag-6').load('assets/recipes/' + dessertsArray[2] + '.html #tag-6');
	$('#dessert-1-tag-7').load('assets/recipes/' + dessertsArray[2] + '.html #tag-7');
	$('#dessert-1-tag-8').load('assets/recipes/' + dessertsArray[2] + '.html #tag-8');
	$('#dessert-1-tag-9').load('assets/recipes/' + dessertsArray[2] + '.html #tag-9');
	$('#dessert-1-tag-10').load('assets/recipes/' + dessertsArray[2] + '.html #tag-10');
	// Dessert 2
	$('#dessert-2-title').load('assets/recipes/' + dessertsArray[1] + '.html #recipe-name');
	$('#dessert-2-prep-time').load('assets/recipes/' + dessertsArray[1] + '.html #prep-time');
	$('#dessert-2-cook-time').load('assets/recipes/' + dessertsArray[1] + '.html #cook-time');
	$('#dessert-2-calories').load('assets/recipes/' + dessertsArray[1] + '.html #calories');
	$('#dessert-2-protein').load('assets/recipes/' + dessertsArray[1] + '.html #protein');
	$('#dessert-2-carbs').load('assets/recipes/' + dessertsArray[1] + '.html #carbs');
	$('#dessert-2-fat').load('assets/recipes/' + dessertsArray[1] + '.html #fat');
	$('#dessert-2-ingredients').load('assets/recipes/' + dessertsArray[1] + '.html #shopping-list');
	$('#dessert-2-hardware').load('assets/recipes/' + dessertsArray[1] + '.html #hardware-list');
	$('#dessert-2-tag-1').load('assets/recipes/' + dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-2').load('assets/recipes/' + dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-3').load('assets/recipes/' + dessertsArray[1] + '.html #tag-2');
	$('#dessert-2-tag-4').load('assets/recipes/' + dessertsArray[1] + '.html #tag-4');
	$('#dessert-2-tag-5').load('assets/recipes/' + dessertsArray[1] + '.html #tag-5');
	$('#dessert-2-tag-6').load('assets/recipes/' + dessertsArray[1] + '.html #tag-6');
	$('#dessert-2-tag-7').load('assets/recipes/' + dessertsArray[1] + '.html #tag-7');
	$('#dessert-2-tag-8').load('assets/recipes/' + dessertsArray[1] + '.html #tag-8');
	$('#dessert-2-tag-9').load('assets/recipes/' + dessertsArray[1] + '.html #tag-9');
	$('#dessert-2-tag-10').load('assets/recipes/' + dessertsArray[1] + '.html #tag-10');
	// Dessert 3
	$('#dessert-3-tag-1').load('assets/recipes/' + dessertsArray[2] + '.html #tag-1');
	$('#dessert-3-tag-2').load('assets/recipes/' + dessertsArray[2] + '.html #tag-2');
	$('#dessert-3-tag-3').load('assets/recipes/' + dessertsArray[2] + '.html #tag-3');
	$('#dessert-3-tag-4').load('assets/recipes/' + dessertsArray[2] + '.html #tag-4');
	$('#dessert-3-tag-5').load('assets/recipes/' + dessertsArray[2] + '.html #tag-5');
	$('#dessert-3-tag-6').load('assets/recipes/' + dessertsArray[2] + '.html #tag-6');
	$('#dessert-3-tag-7').load('assets/recipes/' + dessertsArray[2] + '.html #tag-7');
	$('#dessert-3-tag-8').load('assets/recipes/' + dessertsArray[2] + '.html #tag-8');
	$('#dessert-3-tag-9').load('assets/recipes/' + dessertsArray[2] + '.html #tag-9');
	$('#dessert-3-tag-10').load('assets/recipes/' + dessertsArray[2] + '.html #tag-10');
	$('#dessert-3-title').load('assets/recipes/' + dessertsArray[2] + '.html #recipe-name');
	$('#dessert-3-prep-time').load('assets/recipes/' + dessertsArray[2] + '.html #prep-time');
	$('#dessert-3-cook-time').load('assets/recipes/' + dessertsArray[2] + '.html #cook-time');
	$('#dessert-3-calories').load('assets/recipes/' + dessertsArray[2] + '.html #calories');
	$('#dessert-3-protein').load('assets/recipes/' + dessertsArray[2] + '.html #protein');
	$('#dessert-3-carbs').load('assets/recipes/' + dessertsArray[2] + '.html #carbs');
	$('#dessert-3-fat').load('assets/recipes/' + dessertsArray[2] + '.html #fat');
	$('#dessert-3-ingredients').load('assets/recipes/' + dessertsArray[2] + '.html #shopping-list');
	$('#dessert-3-hardware').load('assets/recipes/' + dessertsArray[2] + '.html #hardware-list');

	/* Seafood */
    // Seafood 1
	$('#seafood-1-title').load('assets/recipes/' + seafoodArray[0] + '.html #recipe-name');
	$('#seafood-1-prep-time').load('assets/recipes/' + seafoodArray[0] + '.html #prep-time');
	$('#seafood-1-cook-time').load('assets/recipes/' + seafoodArray[0] + '.html #cook-time');
	$('#seafood-1-calories').load('assets/recipes/' + seafoodArray[0] + '.html #calories');
	$('#seafood-1-protein').load('assets/recipes/' + seafoodArray[0] + '.html #protein');
	$('#seafood-1-carbs').load('assets/recipes/' + seafoodArray[0] + '.html #carbs');
	$('#seafood-1-fat').load('assets/recipes/' + seafoodArray[0] + '.html #fat');
	$('#seafood-1-ingredients').load('assets/recipes/' + seafoodArray[0] + '.html #shopping-list');
	$('#seafood-1-hardware').load('assets/recipes/' + seafoodArray[0] + '.html #hardware-list');
	$('#seafood-3-tag-1').load('assets/recipes/' + seafoodArray[2] + '.html #tag-1');
	$('#seafood-3-tag-2').load('assets/recipes/' + seafoodArray[2] + '.html #tag-2');
	$('#seafood-3-tag-3').load('assets/recipes/' + seafoodArray[2] + '.html #tag-3');
	$('#seafood-3-tag-4').load('assets/recipes/' + seafoodArray[2] + '.html #tag-4');
	$('#seafood-3-tag-5').load('assets/recipes/' + seafoodArray[2] + '.html #tag-5');
	$('#seafood-3-tag-6').load('assets/recipes/' + seafoodArray[2] + '.html #tag-6');
	$('#seafood-3-tag-7').load('assets/recipes/' + seafoodArray[2] + '.html #tag-7');
	$('#seafood-3-tag-8').load('assets/recipes/' + seafoodArray[2] + '.html #tag-8');
	$('#seafood-3-tag-9').load('assets/recipes/' + seafoodArray[2] + '.html #tag-9');
	$('#seafood-3-tag-10').load('assets/recipes/' + seafoodArray[2] + '.html #tag-10');
	// Seafood 2
	$('#seafood-2-title').load('assets/recipes/' + seafoodArray[1] + '.html #recipe-name');
	$('#seafood-2-prep-time').load('assets/recipes/' + seafoodArray[1] + '.html #prep-time');
	$('#seafood-2-cook-time').load('assets/recipes/' + seafoodArray[1] + '.html #cook-time');
	$('#seafood-2-calories').load('assets/recipes/' + seafoodArray[1] + '.html #calories');
	$('#seafood-2-protein').load('assets/recipes/' + seafoodArray[1] + '.html #protein');
	$('#seafood-2-carbs').load('assets/recipes/' + seafoodArray[1] + '.html #carbs');
	$('#seafood-2-fat').load('assets/recipes/' + seafoodArray[1] + '.html #fat');
	$('#seafood-2-ingredients').load('assets/recipes/' + seafoodArray[1] + '.html #shopping-list');
	$('#seafood-2-hardware').load('assets/recipes/' + seafoodArray[1] + '.html #hardware-list');
	$('#seafood-3-tag-1').load('assets/recipes/' + seafoodArray[2] + '.html #tag-1');
	$('#seafood-3-tag-2').load('assets/recipes/' + seafoodArray[2] + '.html #tag-2');
	$('#seafood-3-tag-3').load('assets/recipes/' + seafoodArray[2] + '.html #tag-3');
	$('#seafood-3-tag-4').load('assets/recipes/' + seafoodArray[2] + '.html #tag-4');
	$('#seafood-3-tag-5').load('assets/recipes/' + seafoodArray[2] + '.html #tag-5');
	$('#seafood-3-tag-6').load('assets/recipes/' + seafoodArray[2] + '.html #tag-6');
	$('#seafood-3-tag-7').load('assets/recipes/' + seafoodArray[2] + '.html #tag-7');
	$('#seafood-3-tag-8').load('assets/recipes/' + seafoodArray[2] + '.html #tag-8');
	$('#seafood-3-tag-9').load('assets/recipes/' + seafoodArray[2] + '.html #tag-9');
	$('#seafood-3-tag-10').load('assets/recipes/' + seafoodArray[2] + '.html #tag-10');
	// Seafood 3
	$('#seafood-3-title').load('assets/recipes/' + seafoodArray[2] + '.html #recipe-name');
	$('#seafood-3-prep-time').load('assets/recipes/' + seafoodArray[2] + '.html #prep-time');
	$('#seafood-3-cook-time').load('assets/recipes/' + seafoodArray[2] + '.html #cook-time');
	$('#seafood-3-calories').load('assets/recipes/' + seafoodArray[2] + '.html #calories');
	$('#seafood-3-protein').load('assets/recipes/' + seafoodArray[2] + '.html #protein');
	$('#seafood-3-carbs').load('assets/recipes/' + seafoodArray[2] + '.html #carbs');
	$('#seafood-3-fat').load('assets/recipes/' + seafoodArray[2] + '.html #fat');
	$('#seafood-3-ingredients').load('assets/recipes/' + seafoodArray[2] + '.html #shopping-list');
	$('#seafood-3-hardware').load('assets/recipes/' + seafoodArray[2] + '.html #hardware-list');
	$('#seafood-3-tag-1').load('assets/recipes/' + seafoodArray[2] + '.html #tag-1');
	$('#seafood-3-tag-2').load('assets/recipes/' + seafoodArray[2] + '.html #tag-2');
	$('#seafood-3-tag-3').load('assets/recipes/' + seafoodArray[2] + '.html #tag-3');
	$('#seafood-3-tag-4').load('assets/recipes/' + seafoodArray[2] + '.html #tag-4');
	$('#seafood-3-tag-5').load('assets/recipes/' + seafoodArray[2] + '.html #tag-5');
	$('#seafood-3-tag-6').load('assets/recipes/' + seafoodArray[2] + '.html #tag-6');
	$('#seafood-3-tag-7').load('assets/recipes/' + seafoodArray[2] + '.html #tag-7');
	$('#seafood-3-tag-8').load('assets/recipes/' + seafoodArray[2] + '.html #tag-8');
	$('#seafood-3-tag-9').load('assets/recipes/' + seafoodArray[2] + '.html #tag-9');
	$('#seafood-3-tag-10').load('assets/recipes/' + seafoodArray[2] + '.html #tag-10');

	/* Soups */
    // Soup 1
	$('#soup-1-title').load('assets/recipes/' + soupsArray[0] + '.html #recipe-name');
	$('#soup-1-prep-time').load('assets/recipes/' + soupsArray[0] + '.html #prep-time');
	$('#soup-1-cook-time').load('assets/recipes/' + soupsArray[0] + '.html #cook-time');
	$('#soup-1-calories').load('assets/recipes/' + soupsArray[0] + '.html #calories');
	$('#soup-1-protein').load('assets/recipes/' + soupsArray[0] + '.html #protein');
	$('#soup-1-carbs').load('assets/recipes/' + soupsArray[0] + '.html #carbs');
	$('#soup-1-fat').load('assets/recipes/' + soupsArray[0] + '.html #fat');
	$('#soup-1-ingredients').load('assets/recipes/' + soupsArray[0] + '.html #shopping-list');
	$('#soup-1-hardware').load('assets/recipes/' + soupsArray[0] + '.html #hardware-list');
	$('#soup-3-tag-1').load('assets/recipes/' + soupsArray[2] + '.html #tag-1');
	$('#soup-3-tag-2').load('assets/recipes/' + soupsArray[2] + '.html #tag-2');
	$('#soup-3-tag-3').load('assets/recipes/' + soupsArray[2] + '.html #tag-3');
	$('#soup-3-tag-4').load('assets/recipes/' + soupsArray[2] + '.html #tag-4');
	$('#soup-3-tag-5').load('assets/recipes/' + soupsArray[2] + '.html #tag-5');
	$('#soup-3-tag-6').load('assets/recipes/' + soupsArray[2] + '.html #tag-6');
	$('#soup-3-tag-7').load('assets/recipes/' + soupsArray[2] + '.html #tag-7');
	$('#soup-3-tag-8').load('assets/recipes/' + soupsArray[2] + '.html #tag-8');
	$('#soup-3-tag-9').load('assets/recipes/' + soupsArray[2] + '.html #tag-9');
	$('#soup-3-tag-10').load('assets/recipes/' + soupsArray[2] + '.html #tag-10');
	// Soup 2
	$('#soup-2-title').load('assets/recipes/' + soupsArray[1] + '.html #recipe-name');
	$('#soup-2-prep-time').load('assets/recipes/' + soupsArray[1] + '.html #prep-time');
	$('#soup-2-cook-time').load('assets/recipes/' + soupsArray[1] + '.html #cook-time');
	$('#soup-2-calories').load('assets/recipes/' + soupsArray[1] + '.html #calories');
	$('#soup-2-protein').load('assets/recipes/' + soupsArray[1] + '.html #protein');
	$('#soup-2-carbs').load('assets/recipes/' + soupsArray[1] + '.html #carbs');
	$('#soup-2-fat').load('assets/recipes/' + soupsArray[1] + '.html #fat');
	$('#soup-2-ingredients').load('assets/recipes/' + soupsArray[1] + '.html #shopping-list');
	$('#soup-2-hardware').load('assets/recipes/' + soupsArray[1] + '.html #hardware-list');
	$('#soup-3-tag-1').load('assets/recipes/' + soupsArray[2] + '.html #tag-1');
	$('#soup-3-tag-2').load('assets/recipes/' + soupsArray[2] + '.html #tag-2');
	$('#soup-3-tag-3').load('assets/recipes/' + soupsArray[2] + '.html #tag-3');
	$('#soup-3-tag-4').load('assets/recipes/' + soupsArray[2] + '.html #tag-4');
	$('#soup-3-tag-5').load('assets/recipes/' + soupsArray[2] + '.html #tag-5');
	$('#soup-3-tag-6').load('assets/recipes/' + soupsArray[2] + '.html #tag-6');
	$('#soup-3-tag-7').load('assets/recipes/' + soupsArray[2] + '.html #tag-7');
	$('#soup-3-tag-8').load('assets/recipes/' + soupsArray[2] + '.html #tag-8');
	$('#soup-3-tag-9').load('assets/recipes/' + soupsArray[2] + '.html #tag-9');
	$('#soup-3-tag-10').load('assets/recipes/' + soupsArray[2] + '.html #tag-10');
	// Soup 3
	$('#soup-3-title').load('assets/recipes/' + soupsArray[2] + '.html #recipe-name');
	$('#soup-3-prep-time').load('assets/recipes/' + soupsArray[2] + '.html #prep-time');
	$('#soup-3-cook-time').load('assets/recipes/' + soupsArray[2] + '.html #cook-time');
	$('#soup-3-calories').load('assets/recipes/' + soupsArray[2] + '.html #calories');
	$('#soup-3-protein').load('assets/recipes/' + soupsArray[2] + '.html #protein');
	$('#soup-3-carbs').load('assets/recipes/' + soupsArray[2] + '.html #carbs');
	$('#soup-3-fat').load('assets/recipes/' + soupsArray[2] + '.html #fat');
	$('#soup-3-ingredients').load('assets/recipes/' + soupsArray[2] + '.html #shopping-list');
	$('#soup-3-hardware').load('assets/recipes/' + soupsArray[2] + '.html #hardware-list');
	$('#soup-3-tag-1').load('assets/recipes/' + soupsArray[2] + '.html #tag-1');
	$('#soup-3-tag-2').load('assets/recipes/' + soupsArray[2] + '.html #tag-2');
	$('#soup-3-tag-3').load('assets/recipes/' + soupsArray[2] + '.html #tag-3');
	$('#soup-3-tag-4').load('assets/recipes/' + soupsArray[2] + '.html #tag-4');
	$('#soup-3-tag-5').load('assets/recipes/' + soupsArray[2] + '.html #tag-5');
	$('#soup-3-tag-6').load('assets/recipes/' + soupsArray[2] + '.html #tag-6');
	$('#soup-3-tag-7').load('assets/recipes/' + soupsArray[2] + '.html #tag-7');
	$('#soup-3-tag-8').load('assets/recipes/' + soupsArray[2] + '.html #tag-8');
	$('#soup-3-tag-9').load('assets/recipes/' + soupsArray[2] + '.html #tag-9');
	$('#soup-3-tag-10').load('assets/recipes/' + soupsArray[2] + '.html #tag-10');
});

/* Beef Slider Function */
// as described on page 516 of "JavaScript and JQuery," by Jon Duckett
$('#beef-slider').each(function() {
	let $this = $(this);
	let $group = $this.find('.slide-group');
	let $slides = $this.find('.slide');
	let buttonArray = [];
	let currentIndex = 0;
	let timeout;

	// MOVE() GOES HERE
	function move(newIndex) {
		let animateLeft, slideLeft;

		// advance();

		if ($group.is(':animated') || currentIndex === newIndex) {
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
		$group.animate( {left: animateLeft} , function() {
			$slides.eq(currentIndex).css( {display: 'none'} );
			$slides.eq(newIndex).css( {left: 0} );
			$group.css( {left: 0} );
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if (currentIndex < ($slides.length - 1)) {
				move(currentIndex + 1);
			} else {
				move(0);
			}
		}, 6000);
	}


	$.each($slides, function(index) {

				let $button = $('<button class="slide-btn">' + + '</button>');
				if (index === currentIndex) {
					$button.addClass('active');
				}
				
				$button.on('click', function() {
					move(index);
				}).appendTo($this.find('.slide-buttons'));
				buttonArray.push($button);
		
		});
	// }

	// advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

});

/* BREAD SLIDER */
$('#breads-slider').each(function() {
	let $this = $(this);
	let $group = $this.find('.slide-group');
	let $slides = $this.find('.slide');
	let buttonArray = [];
	let currentIndex = 0;
	let timeout;

	// MOVE() GOES HERE
	function move(newIndex) {
		let animateLeft, slideLeft;

		// advance();

		if ($group.is(':animated') || currentIndex === newIndex) {
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
		$group.animate( {left: animateLeft} , function() {
			$slides.eq(currentIndex).css( {display: 'none'} );
			$slides.eq(newIndex).css( {left: 0} );
			$group.css( {left: 0} );
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if (currentIndex < ($slides.length - 1)) {
				move(currentIndex + 1);
			} else {
				move(0);
			}
		}, 6000);
	}


	$.each($slides, function(index) {

				let $button = $('<button class="slide-btn">' + + '</button>');
				if (index === currentIndex) {
					$button.addClass('active');
				}
				
				$button.on('click', function() {
					move(index);
				}).appendTo($this.find('.slide-buttons'));
				buttonArray.push($button);
		
		});
	// }

	// advance(); // COMMENT OR UNCOMMENT THIS to toggle the timed advance

});

/* Tab Browsing Function */
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


/* Function for jumping to recipe view  */
$('.open-recipe-btn').on('click', function() {
	const $recipeDisplay = document.getElementsByClassName('recipe-display-section');
	const $recipeNum = 'beef-1';
	const $recipeDisplayTitle = document.getElementsByClassName('recipe-display-title');
	$($recipeDisplay).addClass('active');
	// $($recipeDisplayTitle).load('index.html #' + $recipeNum + '-title');
// when you click the button it needs to see wha tthe current recipe-card-id is and sotre that as a variable of what recipe you clicked on
})
