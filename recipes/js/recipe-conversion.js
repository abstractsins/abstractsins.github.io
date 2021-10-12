$('select').change(function() {
    let $oldMeasurements = $('.amount');
    let $newYield = $('select option:selected').html();
    let $oldYield = $('#old-yield').html();
    let factor = ($newYield / $oldYield);
        // CONSOLE TESTING
        console.log(`$oldMeasurements.html(): ${$oldMeasurements.html()}`);
        console.log(`Old Yield: ${$oldYield} servings.`);
        console.log(`New Yield: ${$newYield} servings.`);
        console.log(`Conversion factor: ${factor}x`)
})
                                    

// $( "select" )
//   .change(function () {
//     var str = "";
//     $( "select option:selected" ).each(function() {
//       str += $( this ).text() + " ";
//     });
//     $( "div" ).text( str );
//   })
//   .change();
    
//     .each( function() { 
//         let $newYield = $(this).attr("value");

//     $('.amount').each( function(index, value) {

//     let newMeasurements = value.innerHTML * factor; 
//                     console.log(`New Measurements: ${newMeasurements}`)
// });   