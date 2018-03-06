/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardPage.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import AssignedToMeDiv from '../../components/AssignedToMe/AssignedToMe.js';
import CreatenewIssueButton from '../../components/CreateNewIssueButton/CreateNewIssueButton.js';

class DashboardPage extends React.Component {
	render() {

		return (
				
			<div>
				<Provider store={store}>  
					<div id="centerDiv">
						<div id="centerLeftDiv">
							<CreatenewIssueButton />
						</div>
						<div id="centerRightDiv">
							<AssignedToMeDiv />
						</div>
					</div>
				</Provider>
			</div>
			
		)
	}
	
};

export default DashboardPage;
