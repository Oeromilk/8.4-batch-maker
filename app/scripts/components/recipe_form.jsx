var React = require('react');
var $ = require('jquery');

var Template = require('./temps/template.jsx').Template;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeForm = React.createClass({
  getInitialState: function(){
    return {
      rName: '',
      rAuthor: '',
      prepTime: '',
      cookTime: '',
      cookTemp: '',
      servingSize: '',
      servingType: '',
      ingredientQtyone: '',
      ingredientUnitone: '',
      ingredientone: '',
      ingredientQtytwo: '',
      ingredientUnittwo: '',
      ingredienttwo: '',
      ingredientQtythree: '',
      ingredientUnitthree: '',
      ingredientthree: '',
      ingredientQtyfour: '',
      ingredientUnitfour: '',
      ingredientfour: '',
      ingredientQtyfive: '',
      ingredientUnitfive: '',
      ingredientfive: '',
    };
  },
  handleRname: function(e){
    this.setState({rName: e.target.value});
  },
  handleRAuthor: function(e){
    this.setState({rAuthor: e.target.value});
  },
  handlePTime: function(e){
    this.setState({prepTime: e.target.value});
  },
  handleCTime: function(e){
    this.setState({cookTime: e.target.value});
  },
  handleCTemp: function(e){
    this.setState({cookTemp: e.target.value});
  },
  handleServingSize: function(e){
    this.setState({servingSize: e.target.value});
  },
  handleServingType: function(e){
    this.setState({servingType: e.target.value});
  },
  handleIQty1: function(e){
    this.setState({ingredientQtyone: e.target.value});
  },
  handleIUnit1: function(e){
    this.setState({ingredientUnitone: e.target.value});
  },
  handleI1: function(e){
    this.setState({ingredientone: e.target.value});
  },
  handleIQty2: function(e){
    this.setState({ingredientQtytwo: e.target.value});
  },
  handleIUnit2: function(e){
    this.setState({ingredientUnittwo: e.target.value});
  },
  handleI2: function(e){
    this.setState({ingredienttwo: e.target.value});
  },
  handleIQty3: function(e){
    this.setState({ingredientQtythree: e.target.value});
  },
  handleIUnit3: function(e){
    this.setState({ingredientUnitthree: e.target.value});
  },
  handleI3: function(e){
    this.setState({ingredientthree: e.target.value});
  },
  handleIQty4: function(e){
    this.setState({ingredientQtyfour: e.target.value});
  },
  handleIUnit4: function(e){
    this.setState({ingredientUnitfour: e.target.value});
  },
  handleI4: function(e){
    this.setState({ingredientfour: e.target.value});
  },
  handleIQty5: function(e){
    this.setState({ingredientQtyfive: e.target.value});
  },
  handleIUnit5: function(e){
    this.setState({ingredientUnitfive: e.target.value});
  },
  handleI5: function(e){
    this.setState({ingredientfive: e.target.value});
  },
  handleRecipe: function(e){
    e.preventDefault();

    var recipe = {
      'recipeName': this.state.rName,
      'recipeAuthor': this.state.rAuthor,
      'servingSize': this.state.servingSize,
      'servingType': this.state.servingType,
      'prepTime': this.state.prepTime,
      'cookTime': this.state.cookTime,
      'cookTemp': this.state.cookTemp,
      'ingredients': [{
          'qty1': this.state.ingredientQtyone,
          'unit1': this.state.ingredientUnitone,
          'ingredient1': this.state.ingredientone
        }, {
          'qty2': this.state.ingredientQtytwo,
          'unit2': this.state.ingredientUnittwo,
          'ingredient2': this.state.ingredienttwo
        }, {
          'qty3': this.state.ingredientQtythree,
          'unit3': this.state.ingredientUnitthree,
          'ingredient3': this.state.ingredientthree
        }, {
          'qty4': this.state.ingredientQtyfour,
          'unit4': this.state.ingredientUnitfour,
          'ingredient4': this.state.ingredientfour
        }, {
          'qty5': this.state.ingredientQtyfive,
          'unit5': this.state.ingredientUnitfive,
          'ingredient5': this.state.ingredientfive
      }]
    };

    this.props.handleRecipe(recipe);
  },
  render: function(){
    return (
      <form onSubmit={this.handleRecipe} className="well col-md-8 col-md-offset-2">
        <h2>Basic Info</h2>
        <div className="form-group">
          <input onChange={this.handleRname} value={this.state.rName} type="text" className="form-control" id="recipeName" placeholder="Recipe Name" />
          <input onChange={this.handleRAuthor} value={this.state.rAuthor} type="text" className="form-control" id="recipeAuthor" placeholder="By" />
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td><input onChange={this.handlePTime} value={this.state.prepTime} type="text" className="form-control" placeholder="Prep Time" /></td>
                  <td><input onChange={this.handleCTime} value={this.state.cookTime} type="text" className="form-control" placeholder="Cook Time" /></td>
                  <td><input onChange={this.handleCTemp} value={this.state.cookTemp} type="text" className="form-control" placeholder="Cook Temp" /></td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="form-group">
          <h4>This recipe will make</h4>
          <input onChange={this.handleServingSize} value={this.state.servingSize} type="text" className="form-control" id="amount" placeholder="amount"/>
          <input onChange={this.handleServingType} value={this.state.servingType} type="text" className="form-control" id="type" placeholder="cookies, loaves, serving-size"/>
        </div>
        <div className="form-group">
          <h3>Enter the ingredients below.</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><input onChange={this.handleIQty1} value={this.state.ingredientQtyone} type="text" className="form-control" placeholder="Qty" /></td>
                <td><input onChange={this.handleIUnit1} value={this.state.ingredientUnitone} type="text" className="form-control" placeholder="Cup, teaspoon, oucnce" /></td>
                <td><input onChange={this.handleI1} value={this.state.ingredientone} type="text" className="form-control" placeholder="Ingredient" /></td>
              </tr>
              <tr>
                <td><input onChange={this.handleIQty2} value={this.state.ingredientQtytwo} type="text" className="form-control" placeholder="Qty" /></td>
                <td><input onChange={this.handleIUnit2} value={this.state.ingredientUnittwo} type="text" className="form-control" placeholder="Cup, teaspoon, ounec" /></td>
                <td><input onChange={this.handleI2} value={this.state.ingredienttwo} type="text" className="form-control" placeholder="Ingredient" /></td>
              </tr>
              <tr>
                <td><input onChange={this.handleIQty3} value={this.state.ingredientQtythree} type="text" className="form-control" placeholder="Qty" /></td>
                <td><input onChange={this.handleIUnit3} value={this.state.ingredientUnitthree} type="text" className="form-control" placeholder="Cup, teaspoon, ounce" /></td>
                <td><input onChange={this.handleI3} value={this.state.ingredientthree} type="text" className="form-control" placeholder="Ingredient" /></td>
              </tr>
              <tr>
                <td><input onChange={this.handleIQty4} value={this.state.ingredientQtyfour} type="text" className="form-control" placeholder="Qty" /></td>
                <td><input onChange={this.handleIUnit4} value={this.state.ingredientUnitfour} type="text" className="form-control" placeholder="Cup, teaspoon, ounce" /></td>
                <td><input onChange={this.handleI4} value={this.state.ingredientfour} type="text" className="form-control" placeholder="Ingredient" /></td>
              </tr>
              <tr>
                <td><input onChange={this.handleIQty5} value={this.state.ingredientQtyfive} type="text" className="form-control" placeholder="Qty" /></td>
                <td><input onChange={this.handleIUnit5} value={this.state.ingredientUnitfive} type="text" className="form-control" placeholder="Cup, teaspoon, ounce" /></td>
                <td><input onChange={this.handleI5} value={this.state.ingredientfive} type="text" className="form-control" placeholder="Ingredient" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-info">Save Recipe</button>
      </form>
    );
  }
});

var RecipeFormContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new RecipeCollection()
    };
  },
  handleRecipe: function(recipe){
    console.log(recipe);
    $.post('https://grabow.herokuapp.com/classes/Recipe', recipe).then(function(response){
      console.log(response);
    });
    this.props.router.navigate('recipes/', {trigger: true});
  },
  render: function(){
    return (
      <Template>
        <RecipeForm handleRecipe={this.handleRecipe}/>
      </Template>
    );
  }
});

module.exports = {
  RecipeFormContainer: RecipeFormContainer
};
