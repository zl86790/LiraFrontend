/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';


import IssuePeople from "../../components/Issue/IssuePeople/IssuePeople.js";
import IssueDates from "../../components/Issue/IssueDates/IssueDates.js";
import IssueTimeTrack from "../../components/Issue/IssueTimeTrack/IssueTimeTrack.js";

import IssueDetailTitle from "../../components/Issue/IssueDetailTitle/IssueDetailTitle.js";
import IssueDetailTitleButton from "../../components/Issue/IssueDetailTitleButton/IssueDetailTitleButton.js";
import IssueDetailDetails from "../../components/Issue/IssueDetailDetails/IssueDetailDetails.js";
import IssueDetailDescription from "../../components/Issue/IssueDetailDescription/IssueDetailDescription.js";
import IssueDetailActionsTab from "../../components/Issue/IssueDetailActionsTab/IssueDetailActionsTab.js";

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import Global from '../../components/Global/Global.js';
import store from '../../App/Store.js';
import axios from 'axios';
import './IssueDetailPage.css';

class IssueDetail extends React.Component {
	
	componentDidMount() {
		this.getIssueData();
	}
	
	getIssueData(){
		var _this = this;
		let url = Global.serverpath+'/api/v1/postlogin/issue';
   	 	axios.get(url, {
		    params: {
		      id:_this.props.location.state.issueId
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETISSUEDATA.payload=response.data;
			  store.dispatch(handleGETISSUEDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-2">
						<div style={{paddingTop:20}}>
							<IssuePeople />
							<IssueDates refreshData={this.getIssueData.bind(this)}/>
							<IssueTimeTrack />
						</div>
					</div>
					<div className="col-8">
						<IssueDetailTitle />
						<IssueDetailTitleButton />
						<IssueDetailDetails issue_id={this.props.location.state.issueId} getIssueData={this.getIssueData.bind(this)}/>
						<IssueDetailDescription issue_id={this.props.location.state.issueId} refreshData={this.getIssueData.bind(this)}/>
						<IssueDetailActionsTab issue_id={this.props.location.state.issueId}/>
					</div>
				</div>
			</div>
			
			
		)
	}
	
};


//action  
const handleGETISSUEDATA = {  
    type:'GETISSUEDATA'  
}  


 
function mapStateToProps(state) {  
    return { value: state.issuedata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueDetail = connect(mapStateToProps, mapDispatchToProps)(IssueDetail)  

export default IssueDetail;

