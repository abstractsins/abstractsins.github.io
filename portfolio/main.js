/* TABLE OF CONTENTS */
// 1 -- Global Concerns
// 1-A -- Up Button
// 2 -- Circle Functions
// 2-A -- Sammy Circle
// 2-B -- Hovering on Circles
// 2-C -- Random Color Circle
// 2-D -- Contact Circle 
// 2-E -- Bio Circle
// 2-F -- Recipe Circle
// 3 -- Email and Phone Click Functions
/* END TABLE OF CONTENTS */

/* 1 -- GLOBAL CONCERNS*/
// GLOBAL VARIABLES
let $circles = $('.circle')

const assignIDs = () => {
    let $idsArr = [];
    let z = $circles.length;
    for(let i=0; i<z; i++) {
        $idsArr.push($circles.eq(i).attr('id'));
    }
    console.log($idsArr);
}

/* 1-A -- UP BUTTON */
// Function for Up-Button
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
/* END 1-A -- UP BUTTON */

/* END 1 -- GLOBAL CONCERNS*/

/* 2 -- CIRCLE FUNCTIONS */

/* 2-A -- SAMMY CIRCLE */
const sammy = () => {
    if (!$('#bio.circle').hasClass('clicked') && !$('#contact.circle').hasClass('clicked')) { // Checks if the coast is clear
        console.log('SAMMY!');
        window.open("http://sammyseal.com", "_blank");
    }
}
/* END 2-A -- SAMMY CIRCLE */

/* 2-B -- HOVERING ON CIRCLES */
const hover = () => {

    $circles.each( function(){
        let $id = $(this).attr('id');
        let id = $(`#${$id}-caption-content`);
        
        $(this).mouseenter(() => {
            if ($('#contact.circle').hasClass('clicked') || $('#bio.circle').hasClass('clicked')) {
                return;
            } else if (!$(this).hasClass('clicked')) {
                id.addClass('active');
                $(this).css({"z-index": "11"});
                $('#contact-caption-content p').css('display', 'none');
            }
        });
        if (id != '#contact-caption-content') {
            console.log('TEST OF SOME KIND')
            $(this).mouseleave(() => {
                id.removeClass('active');
                $(this).css({"z-index": ""});
                
            }) 
        } else {
            return;
        }
    })  
}
/* END 2-B -- HOVERING ON CIRCLES */

/* 2-C -- RANDOM COLOR CIRCLE */
const randoColor = () => {
    if(!$('#contact').hasClass('clicked')) { // if contact button isnt clicked
        let r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        rgb = `rgb(${r}, ${g}, ${b})`;
        // console.log(rgb);
        $('#rando-color').css("background-color", `${rgb}`);
        $('#rando-color').html('<h3>'+rgb+'</h3>')
        if ((r<128 && g<128 && b<128) || (r+g<128 || g+b<128 || r+b<128)){
            $('#rando-color h3').css("color", "whitesmoke");
        } else if ((r+g>256 || g+b>256 || r+b>256) || (r>86 || g<86 || r>86)) {
            $('#rando-color h3').css("color", "black");
        } else {
            $('#rando-color h3').css("color", "black");
        }
    }
}
/* END 2-C -- RANDOM COLOR CIRCLE */

/* 2-D -- CONTACT CIRCLE ACTION */
const contactCircle = () => {
    let $deets = $('#contact-caption-content');
    let $deetsP = $('#contact-info');
    let $btn = $('#contact.circle');
    let $captionSection = $('.caption-section');
    $deets.addClass('active');
    $deetsP.css({   'display': 'unset'});

    
    if($btn.hasClass('clicked')) {
    /* IF CLICKED ALREADY */
        // CONTACT CIRCLE
        $btn.removeClass('clicked');
        $btn.css({  "top": "",
                    "background-color": "",
                    "filter": "",
                    "transform": "",
                    "z-index": "1600"});
        $('#contact').removeClass('clicked');
        // CAPTION SECTION
        $captionSection.css({    "height": ""});
        $deets.css({"display": ""});
        $deetsP.css({"display": "none"})
        $('.contact-block').css({"right": ""});
        // BIO CIRCLE
        $('#bio').css({ "top": "",
                            "left": "",
                            "filter": "",
                            "transition": ""});             
        // SAMMY CIRCLE
        $('#sammy').css({ "top": "",
                            "left": "",
                            "filter": "",
                            "transition": ""});                            
        // RECIPES CIRCLE
        $('#recipes').css({ "top": "",
                            "left": "",
                            "filter": "",
                            "transition": ""});
        // RANDOM-COLOR CIRCLE
        $('#rando-color').css({ "top": "",
                            "left": "",
                            "filter": "",
                            "transition": ""});
        // MAIN SECTION             
        $('.main-section').css("height", "");
    } else { 
    /* IF NOT CLICKED ALREADY */
        // CONTACT CIRCLE
        $btn.css({  "top": "30vh",
                    "background-color": "black",
                    "filter": "var(--shadow-3c)",
                    "transform": "scale(1.5)",
                    "z-index": "1500"});
        $btn.addClass('clicked');
        $('#contact').addClass('clicked');
        // CAPTION SECTION
        $captionSection.css({    "height": "100%"});
        $('.contact-block').css({   "display": "flex",
                                    "right": "5vw"});
        $deets.css({"display": "flex"});
        $deetsP.css({"display": "flex"});
    
        // BIO CIRCLE
        $('#bio').css({ "top": "5vh",
                            "left": "75vw",
                            "filter": "var(--shadow-1`c`)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // SAMMY CIRCLE
        $('#sammy').css({ "top": "18vh",
                            "left": "55vw",
                            "filter": "var(--shadow-2c)",
                            "z-index": "15",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // RECIPES CIRCLE
        $('#recipes').css({ "top": "6vh",
                            "left": "60vw",
                            "right": "15vw",
                            "filter": "var(--shadow-4c)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // RANDOM COLOR CIRCLE
        $('#rando-color').css({ "top": "8vh",
                            "left": "70vw",
                            "filter": "var(--shadow-5c)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // MAIN SECTION
        $('.main-section').css("height", "10vh");
    }
}
/* END 2-D -- CONTACT CIRCLE ACTION */

/* 2-E -- BIO CIRCLE ACTION */
const bio = () => {
    let $bio = $('#bio');
    if($bio.hasClass('clicked')) {
        /* IF CLICKED ALREADY */
        $bio.removeClass('clicked');
        $bio.css({  "border-radius": "",
                    "background-size": "",
                    "top": "",
                    "width": "",
                    "height": "",
                    "left": "",
                    "z-index": "",
                    "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 750ms background-size ease-in-out"
                });
    const contentBio = () => {
        $('.content.bio').removeClass('clicked');
        $('.content.bio').css({ "display": "none"});
    }
    setTimeout(contentBio, 0);

    } else {
        if(!$('#contact').hasClass('clicked')) { // if contact button isnt clicked
                /* IF NOT CLICKED ALREADY */
            $bio.css({  "border-radius": "15px",
                        "background-size": "36vw",
                        "width": "70vw",
                        "height": "35vw",
                        "top": "14vh",
                        "left": "15vw",
                        "z-index": "1000",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $bio.addClass('clicked');
            $('#contact').css({ "z-index": "1" });
            const contentBio = () => {
                if ($bio.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.bio').addClass('clicked');
                    $('.content.bio').css({ "display": "flex"});
                }
            }
            setTimeout(contentBio, 550);
        }
    }
}
/* END 2-E -- BIO CIRCLE ACTION */

/* 2-F -- RECIPE CIRCLE */
const recipes = () => {
    if (!$('#bio.circle').hasClass('clicked') && !$('#contact.circle').hasClass('clicked')) { // Checks if the coast is clear
        console.log('RECIPES!');
        window.open("https://abstractsins.github.io/recipes", "_blank");
    }
}
/* 2-F -- END RECIPE CIRCLE */

/* END 2 -- CIRCLE FUNCTIONS */

/* 3 -- EMAIL AND PHONE CLICK FUNCTIONS */
const email = () => {
    window.open("mailto:daniel.berlin@comcast.net?subject=Divs4u!");
}

const phone = () => {
    window.open("tel:+13027664251");
}

/* END 3 -- EMAIL AND PHONE CLICK FUNCTIONS */


/* FUNCTION CALLS */
assignIDs();
hover();
/* END FUNCTION CALLS */
