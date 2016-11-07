var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://grabow.herokuapp.com/users',
  signUp: function(){
    var username = this.get('username');
    var password = this.get('password');

    this.save().then(function(data){
      console.log(data);
    });
  }
});

module.exports = {
  User: User
};
