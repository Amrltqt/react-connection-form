/**
 * @jsx.React
 * @author Amirault Quentin - 24/08/2015
 */

var React = require('react');

var ValidationInputComponent = React.createClass({
  render: function() {
    return <div>
             <button className="btn btn-lg btn-primary btn-block" type="submit">{this.props.label}</button>
           </div>
  }
});

module.exports = ValidationInputComponent
