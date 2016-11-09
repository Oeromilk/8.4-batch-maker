var recipe = {
  'recipeName': 'Chocolate Chip Cookies',
  'recipeAuthor': 'Mrs. Baker',
  'servingSize': 12,
  'servingType': 'Cookies',
  'prepTime': '15 min',
  'cookTime': '20 min',
  'cookTemp': '350 F',
  'ingredients': [
    {
      'qty': 2,
      'unit': 'Cup',
      'ingredient': 'Sugar'
    }, {
      'qty': 0.5,
      'unit': 'Cup',
      'ingredient': 'Butter'
    } ,{
      'qty': 1,
      'unit': 'Cup',
      'ingredient': 'Brown Sugar'
    }, {
      'qty': 2,
      'unit': '',
      'ingredient': 'Eggs'
    }, {
      'qty': 3,
      'unit': 'Cup',
      'ingredient': 'Flour'
    }
  ]
};


module.exports = recipe;
// console.log(recipe.ingredients);
// function adjustRecipe(newServSize){
//   var baseInQty = recipe.ingredients[0].qty / recipe.servingSize;
//   var newInQty = baseInQty * newServSize;
//   recipe.ingredients[0].qty = newInQty;
//   var baseInQty1 = recipe.ingredients[1].qty / recipe.servingSize;
//   var newInQty1 = baseInQty1 * newServSize;
//   recipe.ingredients[1].qty = newInQty1;
//   var baseInQty2 = recipe.ingredients[2].qty / recipe.servingSize;
//   var newInQty2 = baseInQty2 * newServSize;
//   recipe.ingredients[2].qty = newInQty2;
//   var baseInQty3 = recipe.ingredients[3].qty / recipe.servingSize;
//   var newInQty3 = baseInQty3 * newServSize;
//   recipe.ingredients[3].qty = newInQty3;
//   var baseInQty4 = recipe.ingredients[4].qty / recipe.servingSize;
//   var newInQty4 = baseInQty4 * newServSize;
//   recipe.ingredients[4].qty = newInQty4;
// }
// adjustRecipe(1);
// console.log(recipe.ingredients);
