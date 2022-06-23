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
