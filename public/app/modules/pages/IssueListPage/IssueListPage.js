/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import IssueList from '../../components/Issue/IssueList/IssueList.js';
import CreatenewIssueButton from '../../components/Dashboard/CreateNewIssueButton/CreateNewIssueButton.js';

class IssueListPage extends React.Component {
	
	constructor(props) {
		super(props);
		if(this.props.location.state==undefined){
			this.props.location.state = {};
		}
	}
	
	render() {
		return (
				
			<div>
				<div className="row">
					<div className="col-2">
						<CreatenewIssueButton />
					</div>
					<div className="col-10">
						<IssueList project_id={this.props.location.state.project_id}/>
					</div>
				</div>
			</div>
			
		)
	}
	
};

export default IssueListPage;
