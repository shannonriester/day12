// Show me how to calculate the average price of all items.
// var priceVal = items.map(function(costVal){
//  return costVal.price;
// });
// var number = priceVal.reduce(function(sum, item){
//  return sum + item;
// });
// var answer = number/priceVal.length;
// console.log(answer);
// document.querySelector('#answer1').textContent = answer;


//Show me how to get an array of items that cost between $14.00 and $18.00 USD

  var grpItems = items.filter(function(priceRng){
    if (priceRng.price >= 14 && priceRng.price <=18)
    {
      return priceRng.price;
    }
  }).map(function(item, index, arr){
      return item.title;
    });
  console.log(grpItems);
  document.querySelector('#answer2').textContent = grpItems;




//Which item has a "GBP" currency code? Display it's name and price.
//   var answer3;
//   var currencyArr = items.filter(function(cCode){
//     if (cCode.currency_code === 'GBP') {
//       answer3 = cCode.title + ' costs £' + cCode.price;
//       return cCode.title;
//     }
//   });
//     document.querySelector('#answer3').textContent = answer3;
//     // console.log(answer3);
//
//
//
// //Display a list of all items who are made of wood.
//   // items.materials
// var answer4;
// var specificMaterial = items.filter(function(material){
//   if (material.materials.indexOf('wood') > -1){
//     answer4 = material.title;
//   }
// });
// document.querySelector('#answer4').textContent = answer4;
//
//
// //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// var materilTitle;
// var materialLength;
// var materialsList;
//
//
// var materialAmt = items.filter(function(amount){
//   if (amount.materials.length >= 8) {
//     materialTitle = amount.title;
//     materialLength = amount.materials.length;
//     materialsList = amount.materials;
//   }
// });
// document.querySelector('#answer5a').textContent = 'Title: ' + materialTitle;
// document.querySelector('#answer5b').textContent = 'Length of Materials : ' + materialLength;
// document.querySelector('#answer5c').textContent = 'List of Materials: ' + materialsList;
//
//
// //How many items were made by their sellers?
// var artist = items.filter(function(whoDidIt){
//   if (whoDidIt.who_made === 'i_did'){
//     return whoDidIt;
//   }
// });
// document.querySelector('#answer5a').textContent = artist.length;
// // console.log(artist.length);
