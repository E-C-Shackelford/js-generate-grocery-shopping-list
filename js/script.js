// *****  remove duplicate items from a grocery list and generate a numbered list of grocery items  *****
var groceries = [
  "coconut milk",
  "hemp milk",
  "matcha",
  "kiwi",
  "mango",
  "almond yogurt",
  "oats",
  "limes",
  "ginger",
  "quinoa",
  "hemp milk",
  "mango",
  "berries",
  "peaches",
  "pears",
  "cinnamon",
  "matcha",
  "pineapple",
  "lettuce",
  "carrots",
  "kale",
];
console.log(groceries.length);

var deleteDuplicates = function (list) {
  // this empty cleanList array will hold the unique items from your groceries list
  var cleanList = [];
  for (var item of list) {
    // if the cleanList array doesn't inlcude the item, add an element to the end of the array
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

// *****  check the length of the new array  *****

// create a new variable, assign it to a call to the deleteDuplicates function, and pass the groceries array as an argument
var newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);
// only pushing elements to the empty array that it doesn’t already contain, so the length of the new array will be shorter than the original array

// *****  create a numbered list of the grocery items  *****

// loop through the newGroceries array to find the element and the index of each element
newGroceries.forEach(function (item, index) {
  console.log(`${index + 1} — ${item}`);
});
