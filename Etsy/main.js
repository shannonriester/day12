// Show me how to calculate the average price of all items.
var priceVal = items.map(function(costVal) {
    return costVal.price;
});
var number = priceVal.reduce(function(sum, item) {
    return sum + item;
});
var answer = number / priceVal.length;
// console.log(answer);
document.querySelector('#answer1').textContent = answer;


//Show me how to get an array of items that cost between $14.00 and $18.00 USD

var grpItems = items.filter(function(priceRng) {
    if (priceRng.price >= 14 && priceRng.price <= 18) {
        return priceRng.price;
    }
}).map(function(item, index, arr) {
    return item.title;
});
// console.log(grpItems);
document.querySelector('#answer2').textContent = grpItems;


//Which item has a "GBP" currency code? Display it's name and price.
var currencyCodeItem = items.filter(function(cCode, i) {
    return cCode.currency_code === 'GBP';
});

var gbpPrice = currencyCodeItem.map(function(item) {
    // console.log(item.price);
    return item.price;
});
var gbpTitle = currencyCodeItem.map(function(item) {
    // console.log(item.title);
    return item.title;
});
document.querySelector('#answer3').textContent = gbpTitle + ' costs Â£' + gbpPrice;


//Display a list of all items who are made of wood.
var specificMaterial = items.filter(function(material) {
    return material.materials.indexOf('wood') !== -1;
});

var woodItems = specificMaterial.map(function(item){
  // console.log(item.title);
  return item.title;
});

document.querySelector('#answer4').textContent = woodItems;


// //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// var materilTitle;
// var materialLength;
// var materialsList;


var materialAmt = items.filter(function(amount){
  // console.log(amount.materials.length >= 8);
  return amount.materials.length >= 8;
  });
  var materialTitle = materialAmt.map(function(amount){
    // console.log(amount.title);
    return amount.title;
  });
  var materialLength = materialAmt.map(function(amount){
    // console.log(amount.materials.length);
    return amount.materials.length;
  });
  var materialList = materialAmt.map(function(amount){
    // console.log(amount.materials);
    return amount.materials;
  });

document.querySelector('#answer5a').textContent = 'Title: ' + materialTitle;
document.querySelector('#answer5b').textContent = 'Length of Materials : ' + materialLength;
document.querySelector('#answer5c').textContent = 'List of Materials: ' + materialList;


// How many items were made by their sellers?
var artist = items.filter(function(whoDidIt){
  // console.log(whoDidIt.who_made === 'i_did');
  return whoDidIt.who_made === 'i_did';
});

document.querySelector('#answer6').textContent = artist.length;
console.log(artist.length);
