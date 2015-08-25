/**
 * @jsx.React - 24/08/2015
 */

var React = require('react');

var TitleFormComponent =          require('./TitleFormComponent.react');
var EmailInputComponent =         require('./EmailInputComponent.react');
var PasswordInputComponent =      require('./PasswordInputComponent.react');
var RememberMeInputComponent =    require('./RememberMeInputComponent.react');
var ValidationInputComponent =    require('./ValidationInputComponent.react');

var ConnectionFormComponent = React.createClass({
  render: function() {
    return <form action="#" method="post" className="form-signin">
      <TitleFormComponent title="Connexion" />
      <EmailInputComponent label="Adresse email" />
      <PasswordInputComponent label="Mot de passe" />
      <RememberMeInputComponent label="Se souvenir de moi" />
      <ValidationInputComponent label="Connexion" />
    </form>
  }
});

module.exports = ConnectionFormComponent
