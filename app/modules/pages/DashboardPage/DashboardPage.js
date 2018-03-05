/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardPage.css';

import AssignedToMeDiv from '../../components/AssignedToMe/AssignedToMe.js';
import CreatenewIssueButton from '../../components/CreateNewIssueButton/CreateNewIssueButton.js';


var DashboardPage = React.createClass({
	render: function() {

		return (
				
			<div>
				<div id="centerDiv">
					<div id="centerLeftDiv">
						<CreatenewIssueButton />
					</div>
					<div id="centerRightDiv">
						<AssignedToMeDiv />
					</div>
				</div>
			</div>
			
		)
	}
	
});

export default DashboardPage;
