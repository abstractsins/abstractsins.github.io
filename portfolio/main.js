/* TO DO: */
// 1) Make rando color circle display rgb numbers inside
/* END TO DO: */


/* TABLE OF CONTENTS */
// 1 -- Global Concerns
// 1-A -- Up Button
// 2 -- Circle Functions
// 2-A -- Clicking Circles
// 2-B -- Hovering on Circles
// 2-C -- Random Color Circle
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

/* 2-A -- CLICKING CIRCLES */
// $circle.click( function() { $(this).css("background-color", "black") })
/* END 2-A -- CLICKING CIRCLES */

/* 2-B -- HOVERING ON CIRCLES */
const hover = () => {

    $circles.each( function(){
        let $id = $(this).attr('id');
        let id = $(`#${$id}-caption-content`);
        
        $(this).mouseenter(() => {
            if ($('#contact.circle').hasClass('clicked')) {
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
                $(this).css({"z-index": "unset"});
                
            }) 
        } else {
            return;
        }
    })  
}

/* END 2-B -- HOVERING ON CIRCLES */

/* 2-C -- RANDOM COLOR CIRCLE */
const randoColor = () => {
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
    }
}
/* END 2-C -- RANDOM COLOR CIRCLE */

/* 2-D -- CONTACT CIRCLE ACTION */
const contactCircle = () => {
    let $deets = $('#contact-caption-content');
    let $deetsP = $('#contact-caption-content p');
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
                    "transform": ""});
        $('#contact').removeClass('clicked');
        // CAPTION SECTION
        $captionSection.css({    "height": ""});
        // $deets.removeClass('clicked');
        // $deetsP.removeClass('clicked');
        $deets.css({"display": "none"});
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
        $btn.css({  "top": "40vh",
                    "background-color": "black",
                    "filter": "var(--shadow-3c)",
                    "transform": "scale(1.5)"})
        $btn.addClass('clicked');
        $('#contact').addClass('clicked');
        // CAPTION SECTION
        $captionSection.css({    "height": "100%"});
        // $deets.addClass('clicked');
        // $deetsP.addClass('clicked');
        $('.contact-block').css({   "display": "flex",
                                    "right": "10vw"});
        $deets.css({"display": "flex"});
        $deetsP.css({"display": "flex"})
    
        // BIO CIRCLE
        $('#bio').css({ "top": "12vh",
                            "left": "60vw",
                            "filter": "var(--shadow-1c)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // SAMMY CIRCLE
        $('#sammy').css({ "top": "18vh",
                            "left": "60vw",
                            "filter": "var(--shadow-2c)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // RECIPES CIRCLE
        $('#recipes').css({ "top": "2vh",
                            "left": "60vw",
                            "right": "15vw",
                            "filter": "var(--shadow-4c)",
                            "transition": "750ms filter ease-in-out, 350ms transform ease-in-out, 750ms top ease-out, 750ms left ease-out, 750ms width ease-out, 750ms height ease-out"});
        // RANDOM COLOR CIRCLE
        $('#rando-color').css({ "top": "8vh",
                            "left": "60vw",
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
        $bio.removeClass('clicked');
            // reset
        $bio.css({      "border-radius": "50%",
                        "width": "",
                        "height": "",
                        "left": "15vw",
                        "z-index": "1000"})

    } else {
        $bio.addClass('clicked')
        $bio.css({  "border-radius": "15px",
                    "width": "40vw",
                    "height": "25vw",
                    "left": "15vw",
                    "z-index": "1000"})
    }
}
/* END 2-E -- BIO CIRCLE ACTION */

/* END 2 -- CIRCLE FUNCTIONS */

/* FUNCTION CALLS */
assignIDs();
hover();
/* END FUNCTION CALLS */
