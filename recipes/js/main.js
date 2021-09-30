// 100% hand-coded on Planet Earth

// For Lightslider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
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

/* RECIPE CARD INFO FUNCTION */
// Takes information from the recipe pages and displays it in the homepage cards

//In Memory of John -- (jscheuer1) -- Global Moderator at Dynamic Drive Forums
//who is still helping people, even after his death

jQuery(function async($){
	// Beef 1
    $('#beef-1-title').load('assets/recipes/meatloaf.html #recipe-name');
	$('#beef-1-prep-time').load('assets/recipes/meatloaf.html #prep-time');
	$('#beef-1-cook-time').load('assets/recipes/meatloaf.html #cook-time');
	$('#beef-1-calories').load('assets/recipes/meatloaf.html #calories');
	$('#beef-1-protein').load('assets/recipes/meatloaf.html #protein');
	$('#beef-1-carbs').load('assets/recipes/meatloaf.html #carbs');
	$('#beef-1-fat').load('assets/recipes/meatloaf.html #fat');
	$('#beef-1-ingredients').load('assets/recipes/meatloaf.html #shopping-list');
	// $('#beef-1-pic').load('assets/recipes/meatloaf.html #recipe-pic');
    // Beef 2
    $('#beef-2-title').load('assets/recipes/chili.html #recipe-name');
	$('#beef-2-prep-time').load('assets/recipes/chili.html #prep-time');
	$('#beef-2-cook-time').load('assets/recipes/chili.html #cook-time');
	$('#beef-2-calories').load('assets/recipes/chili.html #calories');
	$('#beef-2-protein').load('assets/recipes/chili.html #protein');
	$('#beef-2-carbs').load('assets/recipes/chili.html #carbs');
	$('#beef-2-fat').load('assets/recipes/chili.html #fat');
	$('#beef-2-ingredients').load('assets/recipes/chili.html #shopping-list');
	// $('#beef-2-pic').load('assets/recipes/chili.html #recipe-pic');
    // Beef 3 
    $('#beef-3-title').load('assets/recipes/short-ribs.html #recipe-name');
	$('#beef-3-prep-time').load('assets/recipes/short-ribs.html #prep-time');
	$('#beef-3-cook-time').load('assets/recipes/short-ribs.html #cook-time');
	$('#beef-3-calories').load('assets/recipes/short-ribs.html #calories');
	$('#beef-3-protein').load('assets/recipes/short-ribs.html #protein');
	$('#beef-3-carbs').load('assets/recipes/short-ribs.html #carbs');
	$('#beef-3-fat').load('assets/recipes/short-ribs.html #fat');
	$('#beef-3-ingredients').load('assets/recipes/short-ribs.html #shopping-list');
	// $('#beef-3-pic').load('assets/recipes/short-ribs.html #recipe-pic');

    // Breads 1
    // Breads 2
    // Breads 3

    // Marinades 1
    // Marinades 2
    // Marinades 3

    // Seafood 1
    // Seafood 2
    // Seafood 3

});

// // Function for Up-Button
// const upBtn = document.getElementById('upBtn');

// const topFunction = () => {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For real browsers
// }

// const scrollFunction = () => {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         upBtn.style.display = "block";
//     } else {
//         upBtn.style.display = "none";
//     }
// }

// window.onscroll = () => { scrollFunction() };



