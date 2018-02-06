var React = require('react');
var ReactDOM = require('react-dom');

var element = React.createElement('h1', {
	className : ''
}, 'Hello Lira');

ReactDOM.render(element, document.getElementById('lira'));
