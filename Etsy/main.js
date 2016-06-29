// Show me how to calculate the average price of all items.
var priceVal = items.map(function(costVal){
  return costVal.price;
});
var totalPrice = priceVal.reduce(function(sum, item){
    return sum + item;
});
var avgPrice = totalPrice/priceVal.length;
console.log(avgPrice + 'avgPrice');


//Show me how to get an array of items that cost between $14.00 and $18.00 USD
var rangeOfItems=[];
  var grpItems = items.filter(function(priceRng){
    if (priceRng.price >= 14 && priceRng.price <=18){
      rangeOfItems.push(priceRng.title);
    }
    return priceRng.price;
  });
  console.log(rangeOfItems);

//Which item has a "GBP" currency code? Display it's name and price.
  var currencyArr = items.filter(function(cCode){
    if (cCode.currency_code === 'GBP') {
      console.log(cCode.title + ' costs £' + cCode.price);
      return cCode.title;
    }
  });



//Display a list of all items who are made of wood.
  // items.materials


var specificMaterial = items.filter(function(material){
  if (material.materials.indexOf('wood') > -1){
    console.log(material.title);
  }
});

//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var materialAmt = items.filter(function(amount){
  if (amount.materials.length >= 8) {
    console.log(amount.title + ' == item title');
    console.log(amount.materials.length + ' == length of materials in item');
    console.log(amount.materials + ' == materials in item');
  }
});

//How many items were made by their sellers?
var artist = items.filter(function(whoDidIt){
  if (whoDidIt.who_made === 'i_did'){
    return whoDidIt;
  }
});

console.log(artist.length);
