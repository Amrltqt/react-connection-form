/**
 * @jsx.React - 24/08/2015
 */

var React = require('react');

var RememberMeInputComponent = React.createClass({
  render: function() {
    return <div className="checkbox">
             <label>
               <input type="checkbox" value="remember-me" /> { this.props.label }
             </label>
          </div>
  }
});

module.exports = RememberMeInputComponent;
