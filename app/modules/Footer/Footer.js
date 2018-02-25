/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.css';

var FooterDiv = React.createClass({
	render: function() {

		return (
				
			<footer className="footer">
		      <div className="container">
		        <span className="text-muted">Place sticky footer content here.</span>
		      </div>
		    </footer>
			
		)
	}
	
});

export default FooterDiv;
