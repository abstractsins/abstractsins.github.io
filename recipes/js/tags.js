// 100% hand-coded on Planet Earth

/* TABLE OF CONTENTS */
	// 1 -- Click Functions
	// 1-A -- Tag Radio Button Function
	// 1-B -- Title Load Function
	// 2 -- Displaying Index Entries
	// 2-A -- Tags
	// 2-B -- Recipe Titles
/* END TABLE OF CONTENTS */

/* 1-B -- TITLE LINK FUNCTION */
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
/* END 1-B -- TITLE LINK FUNCTION */

/* 2 -- DISPLAYING INDEX ENTRIES */
/* 2-A -- TAGS  */
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
/* END 2-A -- TAGS  */

/* 2-B -- RECIPE TITLES */
// ALPHABETICAL MASTER INDEX
let titlesArray = [];
let $titles = $('.recipe-title'); // gather all the titles from all the recipe slides
$titles.each(el => {
	let title = $titles[el].innerText;
	titlesArray.push(title);
});

titlesArray.sort(function (a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
});

// FUNCTION FOR CREATING THE TITLE LIST-ITEMS
for (let i=0; i<titlesArray.length; i++) {
	$('#alpha-listing').append('<a href="#recipe-display-section" id="'+i+'" onclick="titleClick('+i+')"><li class="title master">'+titlesArray[i]+'</li></a>')
}
// FUNCTION TO SERIALIZE RECIPES
let dishSerials = [];
catsSingularArray.forEach(el => {
	for (let j=1; j<catsArray[j].length+1; j++) {
		dishSerials.push(el + '-' + j)
	}
})
/* END 2-B -- RECIPE TITLES */
/* END 2 -- DISPLAYING INDEX ENTRIES */

/* 1 -- TAG RADIO BUTTON FUNCTION */

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
				// console.log(el.tags[i]);
					if (el.tags[i] === tagName) {
						results.push(`<a href="#recipe-display-section" id="${el.id}" onclick="titleClick(${el.id})"><li class="title master">${el.name}</li>`);
					}
				}
			})
			$ul.empty();
			// HERE SPECIFICALLY
			$ul.append(`${results.join('<br>')}</li>`); // RIGHT HERE
		} else if (i != idNum){
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