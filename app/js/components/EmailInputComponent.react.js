/**
 * @jsx.React - 24/08/2015
 */

var React = require('react');

var EmailInputComponent = React.createClass({
  render: function() {
    return <div>
              <label for="inputEmail" className="sr-only">{ this.props.label }</label>
              <input type="email" id="inputEmail" className="form-control" placeholder={ this.props.label } required autofocus />
           </div>
  }
});

module.exports = EmailInputComponent;
