/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardPage.css';

import AssignedToMeDiv from '../../components/AssignedToMe/AssignedToMe.js';
import CreatenewIssueButton from '../../components/CreateNewIssueButton/CreateNewIssueButton.js';

class DashboardPage extends React.Component {
	render() {

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
	
};

export default DashboardPage;
