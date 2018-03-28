/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';

import './IssueDetailDetails.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

class IssueDetailDetails extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openDetails: true};  
		this.showDetails = this.showDetails.bind(this);
	}
	

	showDetails(event) {
		this.setState({openDetails: !this.state.openDetails});
	}

	render() {
		
		const {value} = this.props;  
		if(value._data==undefined){
			value._data = new Object();
		}
		
		var openDetails = this.state.openDetails ? true : false;
		return (
			<div className="issueDetailDetailsDiv">
				<div style={{float:'left'}} onClick={this.showDetails}>Details&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openDetails}>
						<div style={{height:40}}>
					  		<div className="lira-detail-label">Type:</div>
					  		<div className="lira-detail-content">{value._data.type}</div>
					  		<div className="lira-detail-label">Status:</div>
					  		<div className="lira-detail-content">{value._data.status}</div>
					  		<div className="lira-detail-label">Priority:</div>
					  		<div className="lira-detail-content">{value._data.priority}</div>
					  		<div className="lira-detail-label">Labels:</div>
					  		<div className="lira-detail-content">{value._data.labels}</div>
					  	</div>
					</Collapse>
				</div>
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

IssueDetailDetails = connect(mapStateToProps, mapDispatchToProps)(IssueDetailDetails)  

export default withRouter(IssueDetailDetails);