// 100% hand-coded on Planet Earth

/* TABLE OF CONTENTS */
	// 1 -- Click Functions
	// 1-A -- Tag Radio Button Function
	// 1-B -- Title Load Function
	// 2 -- Displaying Index Entries
	// 2-A -- Tags
	// 2-B -- Recipe Titles
/* END TABLE OF CONTENTS */



/* 1-B -- TITLE LOAD FUNCTION */
function titleClick(idNum){
	$('#recipe-display-section').addClass('active');
	let titleGroup = document.getElementsByClassName('title master');
	for (let i=0; i<titleGroup.length; i++) {
			// console.log(titleGroup[i].innerHTML)
			// console.log('i: ' + i);
			// console.log('idNum: ' + idNum)

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
/* END 1-B -- TITLE LOAD FUNCTION */

/* 2 -- DISPLAYING INDEX ENTRIES */

/* 2-A -- TAGS  */
let $tagly = $('.tagly'); // gather all the tags from all the recipes (non unique);
console.log(`tagly:`);
console.log($tagly);
let tago = [];
$.each($tagly, (x) => {
	if ($tagly[x].innerText === '') {
		return;
	} else {
		tago.push($tagly[x].innerText);
	}
						// console.log('x: ' + x + ': ' + $tagly[x].innerText); // the actual tags with blanks omitted
})
						// console.log(tago)

let tagoSet = new Set(tago);
let tagoSetArray = Array.from(tagoSet);
let tagsUniqueString = tagoSetArray.join(' ');
							// console.log('tago (non-unique tags): ' + tago); // testing
							// console.log('tagsUniqueString (unique tags in a string): ' + tagsUniqueString);
							// console.log('tagoSetArray (unique tags with commas): ' + tagoSetArray);
							// console.log('tagoSet.size (number of unique tags): ' + tagoSet.size)
let sortedTags = tagoSetArray.sort(function (a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
});

// FUNCTION FOR CREATING THE TAG LIST ITEMS
for (let i=0; i < sortedTags.length; i++) {
	$('#all-tags').append('<li class="tag master" id="'+i+'" onclick="tagSort('+i+')">'+sortedTags[i]+'</li>')
}
/* END 2-A -- TAGS  */

/* 2-B -- RECIPE TITLES */
// ALPHABETICAL MASTER INDEX
let titlesArray = [];
// get rid of repeat
let $titles = $('.title'); // gather all the titles from all the recipe slides
$.each($titles, (el) => {
	if ($('.recipe-display-section').hasClass('active')) {
		let title = $titles[el].innerText;
		titlesArray.includes(title)? console.log('repeat') : titlesArray.push(title);
	} else {
		let title = $titles[el].innerText;
		titlesArray.includes(title)? console.log('repeat') : titlesArray.push(title);
		
	}
});
console.log('titles Array: ' + titlesArray + titlesArray.length)

// let titlesSet = New Set(titlesArray);
console.log($titles);
// console.log(titlesSet);
let sortedTitles = titlesArray.sort();
							// console.log('sORTED titles Array: ' + sortedTitles)

// FUNCTION TO SERIALIZE RECIPES
let dishSerials = [];
catsSingularArray.forEach(el => {
	for (let j=1; j<catsArray[j].length+1; j++) {
		dishSerials.push(el + '-' + j)
	}
})
console.log('serial: ' + dishSerials);

// FUNCTION FOR JOINING SERIAL ID'S AND FILE NAMES
// Currently of no consquence
/*let recipeDirectory = {};
dishSerials.forEach((key, i) => {
	recipeDirectory[key] = `${dishesArray[i]}.html`;
})
let recipeFileNames = Object.values(recipeDirectory);
								console.log('dishesArray: ' + dishesArray);
								console.log(recipeDirectory);
								console.log(recipeFileNames);*/

// FUNCTION FOR CREATING THE TITLE LIST ITEMS
for (let i=0; i < titlesArray.length; i++) {
	$('#alpha-listing').append('<a href="#recipe-display-section" id="'+i+'" onclick="titleClick('+i+')"><li class="title master">'+sortedTitles[i]+'</li></a>')

}
/* END 2-B -- RECIPE TITLES */
if (!$('.recipe-display-section').hasClass('active')) {
	$('#alpha-listing a#0').css("display", "none")
										// console.log('i: ' + i)
										// console.log(titlesArray[i])
}
/* END 2 -- DISPLAYING INDEX ENTRIES */

// EXPERIMENTAL SECTION
// Currently of no consquence
/*let variable = {};
titlesArray.forEach((key, i) => {
	variable[key] = `${recipeFileNames[i-1]}`;
})
console.log(variable);*/


/* 1 -- TAG RADIO BUTTON FUNCTION */

console.log($tagly.length)


function tagSort(idNum){
	let tag = document.getElementById(idNum);
	let tagGroup = document.getElementsByClassName('tag master');
	let $ul = $('#tag-results');

													console.log(tag);
													console.log('tagGroup: ');
													console.log(tagGroup);
													console.log('tagGroup.length :' + tagGroup.length);
	for (let i=0; i<tagGroup.length; i++) {
													console.log('i: ' + i);
													console.log('idNum: ' + idNum)
		if (i === idNum) {
													console.log ('CURRENT TAG')
			// IF TAG IS THE ONE YOU CLICKED THEN APPLY STYLES
			tagGroup[i].style.backgroundColor = 'whitesmoke'; 
			tagGroup[i].style.transform = '';
			tagGroup[i].style.filter = 'unset';
			tagGroup[i].classList.add('active');

			/* FILTER RESULTS GO HERE */
			let tagName = tagGroup[i].innerHTML;
			$ul.empty();
			// HERE SPECIFICALLY
			$ul.append('Recipes with CURRENT TAG: ' + i + '-' + tagName); // RIGHT HERE
			$tagly.each(el => $ul.append('\n ' + el + '-' + tagName + '\n'));

			$tagly.find(/tagName/g).each(console.log("match: " + tagName));
			if ($tagly.find(/tagName/gi)) {
				console.log('ThErE Is A MaTch at index...');
				console.log(recipeArr);
			}
		
		} else if (i != idNum){
													console.log('not current tag');
			tagGroup[i].style.backgroundColor = 'var(--tag-bg)';
			tagGroup[i].style.filter = '';
			tagGroup[i].classList.remove('active');
		}
	}
}
/* END 1-A -- TAG RADIO BUTTON FUNCTION */

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