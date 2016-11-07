var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId'
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://grabow.herokuapp.com/classes/Recipe'
});

module.exports = {
  RecipeCollection: RecipeCollection
};
