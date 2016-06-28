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
      console.log(cCode.title + ' costs £ ' + cCode.price);
      return cCode.title;
    }
  });

//Display a list of all items who are made of wood.
