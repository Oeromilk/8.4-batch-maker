var React = require('react');
var $ = require('jquery');

var Template = require('./temps/template.jsx').Template;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      ingredients: []
    };
  },
  componentWillMount: function(){
    var ingredientList = this.props.collection.map(function(data){
      return data.ingredients;
    });
    this.setState({ingredients: ingredientList});
  },
  handleAdjustServing: function(e){
    console.log("supposed to work");
  },
  render: function(){
    var collection = this.props.collection;

    var self = this;

    var recipeListing = collection.map(function(data){
      var that = self;

      var ingredientListing = data.ingredients.map(function(ingredient){
        return (
          <tr><td>{ingredient.ingredient}</td><td>{ingredient.qty}</td><td>{ingredient.unit}</td></tr>
        )
      });

      return (
        <div key={data.objectId} className="col-md-4">
          <div className="text-center well">
            <h2>{data.recipeName}</h2>
            <h4>{data.recipeAuthor}</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>{data.prepTime}</td><td>{data.cookTime}</td><td>{data.cookTemp}</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th><input onChange={that.handleAdjustServing} value={data.servingSize}/> Servings</th><th>{data.servingType}</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                {ingredientListing}
              </tbody>
            </table>
        </div>
      )
    });
    return (
      <div>
        {recipeListing}
      </div>
    );
  }
});

var RecipeContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new RecipeCollection()
    };
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    collection.fetch().then(function(response){
      self.setState({collection: response.results});
    });
  },
  render: function(){
    return (
      <Template>
        <RecipeList collection={this.state.collection}/>
      </Template>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
};
