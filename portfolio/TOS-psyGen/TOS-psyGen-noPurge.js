/* TO-DOs: */
// add ability to remove deadNums (ie if they were added by mistake)
/* END TO-DOs */

// TOWN OF SALEM PSYCHIC VISION GENERATOR
// ...for claiming with a fake will...

/*This program will generate random unique numbers from 1 through 15, excluding the user's number.
The user runs the program with an input of their own number.
The user will be prompted to choose 'evil' or 'good' for generating 3 or 2 numbers, respectively.
The user will have the option of redrawing numbers after the results are displayed.
Instead of redrawing, the user may move on to a new vision */

// GLOBAL VARIABLES
const prompt = require('prompt-sync')({sigint: true}); // prompt-sync function
const lines = process.stdout.getWindowSize()[1]; // for clearing screen
const playerNum = Number(process.argv[2]); // the player's number from command line
let visionOutput = [];
let currentType = ''; // for redrawing vision of same type
let deadNums = [playerNum]; // for excluding numbers from visions
let nums = [];
let deadNumsPurged = [];
for (let i = 0; i <= 15; i++) {
    nums.push(i);
}

// RANDOM NUMBER FUNCTION
// for generating visions
const randos = (amount) => {
    let i = visionOutput.length;
    while (i < amount) {
        let num = (Math.ceil(Math.random() * 15));

        let x = 0;
        while (x < deadNums.length) {
            x++;
        };
        deadNums.forEach(element => {})

        if (num != playerNum 
            && num != visionOutput[0] 
            && num != visionOutput[1] 
            && num != visionOutput[2] 
            && num != deadNums[0]
            && num != deadNums[1]
            && num != deadNums[2]
            && num != deadNums[3]
            && num != deadNums[4]
            && num != deadNums[5]
            && num != deadNums[6]
            && num != deadNums[7]
            && num != deadNums[8]
            && num != deadNums[9]
            && num != deadNums[10]
            && num != deadNums[11]
            && num != deadNums[12]
            && num != deadNums[13]
            && num != deadNums[14]
            && num != deadNums[15]) {
            visionOutput.push(num);
            i++;
        } 
    } 
}

// DEAD NUMBER VALIDATION FUNCTION
// for removing duplicate numbers
const numValid = (number) => {
    deadNums.push(number);
};

// VISION FUNCTION
// for calling the randos function with the right argument
// and for adding/removing dead players
const vision = (type) => {

    // GOOD VISION
    if (type === 'good' || type === 'g') {
        currentType = 'g';
        randos(2);
        console.log('\nGood Vision...', visionOutput);
        visionOutput = [];
        console.log('Press enter to redraw, or you may enter another vision type...\nOr enter a number to remove them from future visions... ')
        visionType = prompt('>> ');
        vision(visionType.toLowerCase());

    // EVIL VISION
    } else if (type === 'evil' || type === 'e') {
        currentType = 'e';
        randos(3);
        console.log('\nEvil Vision...', visionOutput);
        visionOutput = [];
        console.log('Press enter to redraw, or you may enter another vision type...\nOr enter a number to remove them from future visions... ')
        visionType = prompt('>> ');
        vision(visionType.toLowerCase());

    // HANDLING DEAD PLAYERS
    /* When a valid player number is entered, it will populate a deadNums array */
    } else if ((Number(type) >= 1 && Number(type) <= 15)) {
        // call validation function
        numValid(Number(type));
        // update dead number 

        console.log('\n', deadNums);
                        // CONSOLE TESTING
                        // console.log(typeof(Number(type)));
                        // console.log(typeof(nums));
                        // console.log(typeof(deadNums));
                        // console.log(deadNums);
        console.log('Press enter to redraw, or you may enter another vision type...\nOr enter a number to remove them from future visions... ')
        visionType = prompt('>> ');
        vision(visionType.toLowerCase());
        
    // PRESSING ENTER
    // redraws numbers
    } else if (type === '' && (currentType === 'g' || currentType === 'e')) {
        vision(currentType);

    // EXITING
    } else if (type.toLowerCase() === 'exit' || type.toLowerCase() === 'x') {
        process.exitCode = 1;
        
    // IMPROPER SELECTION
    } else {
        visionType = prompt('Specify a vision type, or dead player>> ');
        vision(visionType.toLowerCase());
    }
}

/* RUN the program */
// clear the screen
for(var i = 0; i < lines; i++) {
    console.log('\r\n');
}
                // CONSOLE TESTING
                // console.log(nums);
// print title
console.log('++TOWN OF SALEM++\n--fake psychic will generator--\n\n')
// print user number
console.log('You are ' + typeof(playerNum) + ' ' + playerNum + '...');
// prompt user for vision type
visionType = prompt('Type of vision>> ');

                // CONSOLE TESTING
                // console.log(visionType);
                // console.log(typeof(visionType));

vision(visionType.toLowerCase());

/*THIS SPACE INTENTIONALLY LEFT BLANK








END*/