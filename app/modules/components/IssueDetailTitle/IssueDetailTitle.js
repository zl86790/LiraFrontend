/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './IssueDetailTitle.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../Global/Global.js';
import store from '../../App/Store.js';

class IssueDetailTitle extends React.Component {
	render() {
		
		const {value} = this.props;  
		if(value._data==undefined){
			value._data = new Object();
		}
	

		return (
				
			<div>
				<div className="issue-detail-breadcrumbs-title">Optus Defects / {value._data.issue_key}</div>
				<h1 className="issue-detail-title">{value._data.name}</h1>
			</div>
			
		)
	}
	
};

function mapStateToProps(state) {  
    return { value: state.issuedata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueDetailTitle = connect(mapStateToProps, mapDispatchToProps)(IssueDetailTitle)  

export default IssueDetailTitle;