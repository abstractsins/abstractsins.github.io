// 100% hand-coded on Planet Earth

/* TABLE OF CONTENTS */
	// 1 -- Click Functions
	// 1-A -- Tag Radio Button Function
	// 1-B -- Title Load Function
	// 2 -- Displaying Index Entries
	// 2-A -- Tags
	// 2-B -- Recipe Titles
/* END TABLE OF CONTENTS */

/* 1 -- TAG RADIO BUTTON FUNCTION */
function tagSort(idNum){
	let tag = document.getElementById(idNum);
	let tagGroup = document.getElementsByClassName('tag master');
	let $ul = $('#tag-results');

													console.log(tag);
													console.log('tagGroup: ' + tagGroup);
													console.log('tagGroup.length :' + tagGroup.length);
	for (let i=0; i<tagGroup.length; i++) {
													console.log('i: ' + i);
													console.log('idNum: ' + idNum)
		if (i === idNum) {
													console.log ('CURRENT TAG')
			tagGroup[i].style.backgroundColor = 'whitesmoke';
			tagGroup[i].style.transform = 'unset';
			tagGroup[i].style.filter = 'unset';
			tagGroup[i].classList.add('active');
			$ul.empty();
			$ul.append(' Recipes with CURRENT TAG: '+[i]+'-'+tagGroup[i].innerHTML) // FILTER RESULTS GO HERE
		} else if (i != idNum){
													console.log('not current tag');
			tagGroup[i].style.backgroundColor = 'var(--tag-bg)';
			tagGroup[i].style.transform = 'translate(0, 0)';
			tagGroup[i].style.filter = 'var(--index-card-shadow-4)';
			tagGroup[i].classList.remove('active');
		}
	}
}
/* END 1-A -- TAG RADIO BUTTON FUNCTION */

/* 1-B -- TITLE LOAD FUNCTION */
function titleClick(idNum){
	let titleGroup = document.getElementsByClassName('title master');
	for (let i=1; i<titleGroup.length; i++) {
			// console.log(titleGroup[i].innerHTML)
			// console.log('i: ' + i);
			// console.log('idNum: ' + idNum)

		if (i === idNum) {
			console.log('clicked title number: ' +idNum+ ': ' + titleGroup[i].innerHTML)
		}
	}
}
/* END 1-B -- TITLE LOAD FUNCTION */

/* 2 -- DISPLAYING INDEX ENTRIES */
jQuery(function async($){

/* 2-A -- TAGS  */
	let $tagly = $('.tagly'); // gather all the tags from all the recipes
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
	let $titles = $('.title'); // gather all the titles from all the recipe slides
	$.each($titles, (el) => {
		titlesArray.push($titles[el].innerText);
	});
	console.log('titles Array: ' + titlesArray)
	console.log($titles)
	let sortedTitles = titlesArray.sort();
								// console.log('sORTED titles Array: ' + sortedTitles)
	
	// FUNCTION TO SERIALIZE RECIPES
	let dishSerials = [];
	catsSingularArray.forEach(el => {
		for (let j=1; j<catsArray[j].length+1; j++) {
			dishSerials.push(el + '-' + j)
		}
	})
	// let $tab = $('.tab');
	
	// $('.tab').each((el) => {
	// 	for (let j=1; j<catsArray[j].length+1; j++) {
	// 		dishSerials.push(catsSingularArray[el] + '-' + j)
	// 	}
	// })
	console.log('serial: ' + dishSerials);

	// $.each($tab, (el) => {
	// 	// if (!$tab.hasClass("construction")) {
	// 		for (let j=1; j<$tab[j].length+1; j++) {
	// 			dishSerials.push(`${el}-${j}`)
	// 		}
	// 	// } else {
	// 	// 	return;
	// 	// }

	// })

	// let dishSerials = [];
	// $('.tab').each((el) => {
	// 	for (let j=1; j<catsArray[j].length+1; j++) {
	// 		dishSerials.push(catsSingularArray[el] + '-' + j)
	// 	}
	// })
	// $.each($('.open-recipe-btn'), function(){
	// 	for (let i = 0; i<$('.open-recipe-btn').size; i++) {
			
	// 	}
	// 	dishSerials.push($('.open-recipe-btn').attr('id'));
	// })

	// FUNCTION FOR JOINING SERIAL ID'S AND FILE NAMES
	let recipeDirectory = {};
	dishSerials.forEach((key, i) => {
		recipeDirectory[key] = `${dishesArray[i]}.html`;
	})
	let recipeFileNames = Object.values(recipeDirectory);
									console.log('dishesArray: ' + dishesArray);
									console.log(recipeDirectory);
									console.log(recipeFileNames);

	// FUNCTION FOR CREATING THE TITLE LIST ITEMS
	for (let i=0; i < titlesArray.length; i++) {
		$('#alpha-listing').append('<a href="#recipe-display-section" id="'+i+'" onclick="titleClick('+i+')"><li class="title master">'+sortedTitles[i]+'</li></a>')
		$('li.title.master').first().css("display", "none")
												// console.log('i: ' + i)
												// console.log(titlesArray[i])
	}
/* END 2-B -- RECIPE TITLES */

})
/* END 2 -- DISPLAYING INDEX ENTRIES */

