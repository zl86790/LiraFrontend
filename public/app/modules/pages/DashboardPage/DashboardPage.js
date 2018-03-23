/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardPage.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import AssignedToMeDiv from '../../components/Dashboard/AssignedToMe/AssignedToMe.js';
import CreatenewIssueButton from '../../components/Dashboard/CreateNewIssueButton/CreateNewIssueButton.js';

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
