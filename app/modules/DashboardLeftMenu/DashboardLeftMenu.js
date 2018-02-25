import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import CreatenewIssueButton from '../CreateNewIssueButton/CreateNewIssueButton.js';
import './DashboardLeftMenu.css';

var DashboardLeftMenu = React.createClass({
	render: function(){
		return (
				<div style={{paddingTop:20}}>
					<CreatenewIssueButton />
				</div>
		)
	}
})

export default DashboardLeftMenu;