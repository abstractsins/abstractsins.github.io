const recipeConversion = (oldYield, newYield) => {
    let factor = (newYield / oldYield);
    let mis = {
        groundBeef: 2,
        breadCrumbs: 1,
        eggs: 1,
    }

    let ingredientMeasurements = Object.values(mis);
        // Console Testing
        console.log('Recipe measurements: ' + JSON.stringify(mis));
        console.log('Recipe Conversion Factor: ' + factor + 'x'); 
        console.log('Measurements array: ' + ingredientMeasurements);
    ingredientMeasurements.forEach( value => {
        let newValue = (value * factor);
            // Console Testing 
            console.log('New Measurement Value: ' + newValue);
        return newValue;
    })
}

let oldYield = 2;
let newYield = 10;
// Test Call
recipeConversion(oldYield, newYield);