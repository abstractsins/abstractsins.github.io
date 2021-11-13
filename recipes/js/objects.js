/* ATTENTION */
/* OBJECTS MODULE IMPORT */
let recipeArr = [];

function Recipe(name, path) {
    this.name = name;
    this.path = path;
    this.tag0 = $('#'+dishSerials[i]+'-tag-0').load(dishesArray[i] + '.html #tag-0');
    this.tag1 = $('#'+dishSerials[i]+'-tag-1').load(dishesArray[i] + '.html #tag-1');
    this.tag2 = $('#'+dishSerials[i]+'-tag-2').load(dishesArray[i] + '.html #tag-2');
    this.tag3 = $('#'+dishSerials[i]+'-tag-3').load(dishesArray[i] + '.html #tag-3');
    this.tag4 = $('#'+dishSerials[i]+'-tag-4').load(dishesArray[i] + '.html #tag-4');
    this.tag5 = $('#'+dishSerials[i]+'-tag-5').load(dishesArray[i] + '.html #tag-5');
    this.tag6 = $('#'+dishSerials[i]+'-tag-6').load(dishesArray[i] + '.html #tag-6');    
    this.recipePush = function() {
        recipeArr.push(this);
    };
    console.log(this);
}

const recipeCollector = () => {
    let biscuits = new Recipe('Best Biscuits', 'biscuits.html').recipePush();
    let cannoli = new Recipe('Stout Malted Cannoli', 'cannoli.html').recipePush();
    let cauliSoup = new Recipe('Moroccan Cauliflower Soup', 'cauliflower-soup.html').recipePush();
    let challah = new Recipe('Challah', 'challah.html').recipePush();
    let chili = new Recipe('Kwiki-Mart Chili', 'chili.html').recipePush();
    let cookies = new Recipe('CCPB Cookies', 'cookies.html').recipePush();
    let langos = new Recipe('Langos', 'langos.html').recipePush();
    let meatloaf = new Recipe('My Meatloaf', 'meatloaf.html').recipePush();
    let shortRibs = new Recipe('Red Wine Short Ribs', 'short-ribs.html').recipePush();
    let shrimpBisque = new Recipe('Shrimp Bisque', 'shrimp-bisque.html').recipePush();
    let pannaCotta = new Recipe('Panna Cotta', 'panna-cotta.html').recipePush();
    let potLeek = new Recipe('Potato Leek Soup', 'potato-leek.html').recipePush();
}

// FUNCTION CALLS
recipeCollector();
console.log(recipeArr);
for (let i=0; i<recipeArr.length; i++) {
    console.log(recipeArr[i].name);
    console.log(recipeArr[i].path);
}
/* END OBJECTS MODULE IMPORT */
/* ATTENTION */