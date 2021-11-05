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
const assignIDs = () => {
    let $idsArr = [];
    let z = $circles.length;
    for(let i=0; i<z; i++) {
        $idsArr.push($circles.eq(i).attr('id'));
    }
    console.log($idsArr);
    $circles.each( function(){
        let $id = $(this).attr('id');
        let id = $(`#${$id}-caption-content`);
        $(this).mouseenter(() => id.addClass('active'));
        $(this).mouseleave(() => id.removeClass('active'));
    })
}

// $circles.mouseenter( function(){
//     $('.caption-section h1').css("color", "white")
//     // $('.caption').load(caption info)
// })
// $circles.mouseleave( function(){
//     $('.caption-section h1').css("color", "unset")
// })
/* END 2-B -- HOVERING ON CIRCLES */

/* 2-C -- RANDOM COLOR CIRCLE */
const randoColor = () => {
    let r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgb = `rgb(${r}, ${g}, ${b})`;
    $('#rando-color').css("background-color", `${rgb}`);
    $('#rando-color').html('<h3>'+rgb+'</h3>')
    if ((r<128 && g<128 && b<128) || (r+g<128 || g+b<128 || r+b<128)){
        $('#rando-color h3').css("color", "whitesmoke");
    }
}
/* END 2-C
 -- RANDOM COLOR CIRCLE */

/* END 2 -- CIRCLE FUNCTIONS */

/* FUNCTION CALLS */
assignIDs();
/* END FUNCTION CALLS */
