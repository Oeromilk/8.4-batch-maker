var React = require('react');
var $ = require('jquery');

var Template = require('./temps/template.jsx').Template;

var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      recipes: []
    };
  },
  componentWillMount: function(){
    var self = this;
    $.get('https://grabow.herokuapp.com/classes/Recipe').then(function(data){
      self.setState({recipes: data});
    });
  },
  render: function(){
    return (
      <div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h2>Recipe Title</h2>
            <h4>Recipe Author</h4>
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody className="text-center">
                <tr><td>Prep Time</td><td>Cook Time</td><td>Cook Temp</td></tr>
              </tbody>
            </table>
          </div>
            <table className="table table-bordered">
              <thead>
                <tr><th>Serving Size and food</th>
                <td><button className="btn btn-warning">Adjust Recipe</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
                <tr>
                  <td>qty unit</td><td>ingredient</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    );
  }
});

var RecipeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <RecipeList />
      </Template>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
};
