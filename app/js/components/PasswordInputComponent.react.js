/**
 * @jsx.React - 24/08/2015
 */

var React = require('react');

var PasswordInputComponent = React.createClass({
  render: function() {
    return <div>
              <label for="inputPassword" className="sr-only">{ this.props.label} </label>
              <input type="password" id="inputPassword" className="form-control" placeholder={this.props.label} required />
           </div>
  }

});

module.exports = PasswordInputComponent;
