var React = require('react');

var Header = React.createClass({
  render: function(){
    var username = localStorage.getItem('username');
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Batch Maker</a>
            <a className="navbar-text glyphicon glyphicon-user"></a>
            <a className="navbar-text glyphicon glyphicon-plus" href="#/recipesform/"></a>
            <a className="navbar-text glyphicon glyphicon-ice-lolly-tasted" href="#/recipes/"></a>
            <p className="navbar-text">Signed in as: {username}</p>
          </div>
        </div>
      </nav>
    )
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports= {
  Template: Template
};
