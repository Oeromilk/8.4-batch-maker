var React = require('react');
var $ = require('jquery');

var Template = require('./temps/template.jsx').Template;
var User = require('../models/users.js').User;
var token = localStorage.getItem('token');

var LogInForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleEmail: function(e){
    this.setState({username: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleLogIn: function(e){
    e.preventDefault();

    var logInInfo = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleLogIn(logInInfo);
    this.setState({username: '', password: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <h3>Log In</h3>
        <form onSubmit={this.handleLogIn} className="well">
          <div className="form-group">
            <label htmlFor="logInEmail">Email address</label>
            <input onChange={this.handleEmail} value={this.state.username} type="email" className="form-control" id="logInEmail" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="logInPassword">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="logInPassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
});

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleEmail: function(e){
    this.setState({username: e.target.value});
  },
  handlePassword: function(e){
    this.setState({password: e.target.value});
  },
  handleSignUp: function(e){
    e.preventDefault();

    var username = this.state.username;
    var password = this.state.password;

    this.props.handleSignUp(username, password);
    this.setState({username: '', password: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <h3>Please Sign Up</h3>
        <form onSubmit={this.handleSignUp} className="well">
          <div className="form-group">
            <label htmlFor="signUpEmail">Email address</label>
            <input onChange={this.handleEmail} value={this.state.username} type="email" className="form-control" id="signUpEmail" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="signUpPassword">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="signUpPassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success">Sign Up</button>
        </form>
      </div>
    );
  }
});

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");
    xhr.setRequestHeader("X-Parse-Session-Token", token);
  }
});

var HandleUserContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  handleSignUp: function(username, password){
    this.state.user.set({username: username, password: password});
    this.state.user.signUp();
  },
  handleLogIn: function(logInInfo){
    localStorage.setItem('username', logInInfo.username);
    var self = this;

    $.get('https://grabow.herokuapp.com/login?username='
      + logInInfo.username + '&password=' + logInInfo.password).then(function(response){
        console.log(response);
      localStorage.setItem('token', response.sessionToken);
      self.props.router.navigate('recipes/', {trigger: true});
    });
  },
  render: function(){
    return (
      <Template>
        <LogInForm handleLogIn={this.handleLogIn}/>
        <SignUpForm handleSignUp={this.handleSignUp}/>
      </Template>
    );
  }
});

module.exports = {
  HandleUserContainer: HandleUserContainer
};
