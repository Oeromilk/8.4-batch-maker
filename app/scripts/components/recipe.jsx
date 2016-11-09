var React = require('react');
var $ = require('jquery');

var Template = require('./temps/template.jsx').Template;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

// var IngredientList = React.createClass({
//   render: function(){
//     console.log(this.props);
//     // var ingredientListing = this.props.ingredients.map(function(data){
//     //   console.log('data', data);
//     // });
//     return (
//       <tr><td>Test</td><td>test</td><td>another test</td></tr>
//     )
//   }
// });

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
  render: function(){
    var collection = this.props.collection;

    var recipeListing = collection.map(function(data){
      console.log("text", data.ingredients);
      return (
        <div key={data.objectId} className="col-md-4">
          <div className="text-center">
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
                <tr><th>{data.servingSize} Servings</th><th>{data.servingType}</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr><td>{data.ingredients.gty}</td></tr>
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
