/**
 * @jsx.React
 * @author Amirault Quentin - 24/08/2015
 */

var React = require('react');

var TitleFormComponent = React.createClass({
  render: function() {
    return <h2 className="form-signin-heading">{ this.props.title }</h2>
  }
});

module.exports = TitleFormComponent
