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
import IssueType from '../IssueType/IssueType.js';
import LabelSelect from '../../common/LabelSelect/LabelSelect.js';

import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

class IssueDetailDetails extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			openDetails: true,
			issueTypeEditDisplay: 'none',
			issueTypeDisplay: true	
		};  
		this.showDetails = this.showDetails.bind(this);
		this.clickIssueType = this.clickIssueType.bind(this);
		this.blurIssueType = this.blurIssueType.bind(this);
		this.blurIssueStatus = this.blurIssueStatus.bind(this);
		this.blurIssuePriority = this.blurIssuePriority.bind(this);
		
	}
	
	
	
	clickIssueType(){
		this.setState({
			issueTypeDisplay:'none',
			issueTypeEditDisplay:true
		});
		setTimeout("document.querySelector('#issueType').focus()",500)
		console.log(this.props.value._data.type);
		this.refs.issueType.refs.issueType.value = this.props.value._data.type;
		this.oldValueOfIssueType = this.props.value._data.type;
	}
	
	blurIssueType(){
		if(this.refs.issueType.refs.issueType.value!=this.oldValueOfIssueType){
			console.log("changed");
			var _this = this;
			var typeValue = this.refs.issueType.refs.issueType.value;
			axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
		 			  {
		 		  			id:_this.props.issue_id,
		 		  			type:typeValue
		 			  }, 
		 			  {
				 	    headers: {
				 	    	"lira_token": Global.getCookie('lira_token')
				 	    }
		 			  }
		 	  ).then(function (response) {
		 		  alert("Update success");
		 		  _this.setState({
		 			issueTypeDisplay:true,
		 			issueTypeEditDisplay:'none'
		 		 });
		 		 _this.props.refreshData();
		 	  }).catch(function (error) {
		 		 alert("Update error"+error);
		 	  });
		}
	}
	blurIssueStatus(){
		console.log("call back for blur issue status");
		var _this = this;
		var value = this.refs.issueStatus.refs.issueStatus.value;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			status:value
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Update success");
	 		  _this.setState({
	 			issueTypeDisplay:true,
	 			issueTypeEditDisplay:'none'
	 		 });
	 		 _this.props.refreshData();
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	blurIssuePriority(){
		console.log("call back for blur issue priority");
		var _this = this;
		var value = this.refs.issuePriority.refs.issuePriority.value;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			priority:value
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Update success");
	 		  _this.setState({
	 			issueTypeDisplay:true,
	 			issueTypeEditDisplay:'none'
	 		 });
	 		 _this.props.refreshData();
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}

	showDetails(event) {
		this.setState({openDetails: !this.state.openDetails});
	}

	render() {
		
		const {value} = this.props;  
		if(value._data==undefined){
			value._data = new Object();
		}
		const statusOptions = [{"id":2,"module_key":"lira-issue","value_key":"issue-type","value_content":"Open"},{"id":3,"module_key":"lira-issue","value_key":"issue-type","value_content":"Closed"}]
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
					  		<div className="lira-detail-content">
					  		<LabelSelect selectId="type" loadByDb="true" module_key ="lira-issue" value_key="issue-type" ref="issueType" selectRef="issueType" onChagedCallBack={this.blurIssueType} initValue={value._data.type}/></div>
					  		<div className="lira-detail-label">Status:</div>
					  		<div className="lira-detail-content"><LabelSelect selectId="status" loadByDb="true" options={statusOptions} module_key="lira-issue" value_key="issue-status" ref="issueStatus" selectRef="issueStatus" onChagedCallBack={this.blurIssueStatus} initValue={value._data.status}/></div>
					  		<div className="lira-detail-label">Priority:</div>
					  		<div className="lira-detail-content"><LabelSelect selectId="priority" loadByDb="true" module_key="lira-issue" value_key="issue-priority" ref="issuePriority" selectRef="issuePriority" onChagedCallBack={this.blurIssuePriority} initValue={value._data.priority}/></div>
					  		<div className="lira-detail-label">Labels:</div>
					  		<div className="lira-detail-content">{value._data.labels}</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};

 
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

IssueDetailDetails = connect(mapStateToProps, mapDispatchToProps)(IssueDetailDetails)  

export default withRouter(IssueDetailDetails);