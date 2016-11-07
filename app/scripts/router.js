var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');

var HandleUserContainer = require('./components/login_signup.jsx').HandleUserContainer;
var RecipeContainer = require('./components/recipe.jsx').RecipeContainer;
var RecipeFormContainer = require('./components/recipe_form.jsx').RecipeFormContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipes/': 'recipes',
    'recipesform/': 'recipesform'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HandleUserContainer, {router: this}),
      document.getElementById('app')
    );
  },
  recipes: function(){
    $.get('https://grabow.herokuapp.com/classes/Recipe').then(function(data){
      console.log(data);
    });
    ReactDom.render(
      React.createElement(RecipeContainer),
      document.getElementById('app')
    );
  },
  recipesform: function(){
    ReactDom.render(
      React.createElement(RecipeFormContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
