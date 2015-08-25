/**
 * @author Amirault Quentin - 24/08/2015
 * @version 1.0
 */

var ConnectionFormComponent =   require('./components/ConnectionFormComponent.react')
var React =                     require('react')

React.render(
  <ConnectionFormComponent />,
  document.getElementById('connection-form')
);
