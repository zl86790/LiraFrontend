
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';
import AssignedToMeDiv from '../AssignedToMe/AssignedToMe.js';

import axios from 'axios';
import store from '../../../App/Store.js';
import './CreateNewIssueButton.css';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import IssueType from '../../Issue/IssueType/IssueType.js';
import ProjectSelect from '../../Project/ProjectSelect.js';
import {ProjectUserAssignee,doLogic} from '../../User/ProjectUser/ProjectUserAssignee.js';

class CreateNewIssueButton extends React.Component {

  state = {
    visible: false,
    destroyOnClose: true,
  };
  onClick = () => {
    this.setState({
      visible: true,
    });
  }
  onChange = () => {
	  doLogic(this.refs.projectSelectModule.refs.project_id.value);
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  }
  onSave = () => {
	  var _this = this;
	  var qs = require('qs');
 	  axios.post(Global.serverpath+'/api/v1/postlogin/issue', 
 			  {
 		  			issue_key:_this.refs.issue_key.value,
 		  			project_id:_this.refs.projectSelectModule.refs.project_id.value,
 		  			issue_name:_this.refs.name.value,
			 	  	type:_this.refs.issueTypeModule.refs.issueType.value,
			 	  	summary:_this.refs.summary.value,
			 	  	priority:_this.refs.priority.value,
			 	  	labels:_this.refs.labels.value,
			 	  	status:"Open",
			 	  	description:_this.refs.description.value,
			 	  	assignee:document.getElementById("assignee_id").value,
			 	  	reporter:_this.refs.reporter.value,
			 	  	created_time:new Date().toJSON(),
			 	  	updated_time:new Date().toJSON(),
			 	  	resolved_time:null,
			 	  	estimated:_this.refs.estimated.value,
			 	  	remaining:_this.refs.remaining.value,
			 	  	logged:_this.refs.logged.value
 			  }, 
 			  {
		 	    headers: {
		 	    	"lira_token": Global.getCookie('lira_token')
		 	    }
 			  }
 	  ).then(function (response) {
 		  alert("Create success");
	      _this.setState({
 	        visible: false,
 	      });
	      let url = Global.serverpath+'/api/v1/postlogin/issues';
	   	 	axios.get(url, {
			    params: {
			      
			    },
			    headers: {
			      "lira_token": Global.getCookie('lira_token')
			    }
			  })
			  .then(function (response) {
				  handleGETDATA.payload=response.data;
				  store.dispatch(handleGETDATA);
			  }).catch(function (error) {
				alert("load error");
			  });
 	  }).catch(function (error) {
 		 alert("create error"+error);
 	  });
    
  }
  onDestroyOnCloseChange = (e) => {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  }
  render() {
	  
    let dialog;
    if (this.state.visible || !this.state.destroyOnClose) {
      dialog = (
        <Dialog
          visible={this.state.visible}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={{ width: 600 }}
          title={<div>Create New Issue</div>}
          footer={
            [
              <button
                type="button"
                className="btn btn-default"
                key="close"
                onClick={this.onClose}
              >
              Close
              </button>,
              <button
                type="button"
                className="btn btn-primary"
                key="save"
                onClick={this.onSave.bind(this)}
              >
              Save changes
              </button>,
            ]
          }
        >
         <div>
         	  <h4>Overflowing text to show scroll behavior</h4>
	          <br/>
	          <div className="create-new-issue-label" style={{paddingTop:45}}>Project:</div>
	          <div className="create-new-issue-content" style={{paddingTop:45}}>
	          	<ProjectSelect ref="projectSelectModule" onChange={this.onChange.bind(this)}/>
	          </div>
	          
	          <div className="create-new-issue-label" style={{}}>Issue Type:</div>
	          <div className="create-new-issue-content" style={{}}>
	          	<IssueType ref="issueTypeModule"/>
	          </div>
	          
	          <div className="create-new-issue-label" style={{}}>Issue Key:</div>
	          <div className="create-new-issue-content" style={{}}>
	          	<input type="text" id="issue_key" className="form-control" placeholder="Issue Key" required autoFocus defaultValue="" ref="issue_key"/>
	          </div>
	          	
	          <div className="create-new-issue-label" style={{}}>Name:</div>
	          <div className="create-new-issue-content" style={{}}>
	          	<input type="text" id="name" className="form-control" placeholder="Name" required autoFocus defaultValue="" ref="name"/>
	          </div>
	          	
	          <div className="create-new-issue-label" style={{}}>Summary:</div>
	          <div className="create-new-issue-content" style={{}}>
	            <input type="text" id="summary" className="form-control" placeholder="Summary" required defaultValue="" ref="summary"/>
	          </div>
          	
          	<div className="create-new-issue-label" style={{}}>Priority:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="priority" className="form-control" placeholder="Priority" required defaultValue="" ref="priority"/>
            </div>
            	
        	<div className="create-new-issue-label" style={{}}>Description:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="description" className="form-control" placeholder="Description" required defaultValue="" ref="description"/>
            </div>	
            
        	<div className="create-new-issue-label" style={{}}>Assignee:</div>
            <div className="create-new-issue-content" style={{}}>
            	<ProjectUserAssignee ref="projectUserAssignee" />
            </div>
            	
        	<div className="create-new-issue-label" style={{}}>Reporter:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="reporter" className="form-control" placeholder="Reporter" required defaultValue="" ref="reporter"/>
            </div>
                	
        	<div className="create-new-issue-label" style={{}}>Labels:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="labels" className="form-control" placeholder="Labels" required defaultValue="" ref="labels"/>
            </div>
            	
        	<div className="create-new-issue-label" style={{}}>Estimated:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="estimated" className="form-control" placeholder="Estimated" required defaultValue="" ref="estimated"/>
            </div>
            
        	<div className="create-new-issue-label" style={{}}>Remaining:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="remaining" className="form-control" placeholder="Remaining" required defaultValue="" ref="remaining"/>
            </div>
            		
        	<div className="create-new-issue-label" style={{}}>Logged:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="logged" className="form-control" placeholder="Logged" required defaultValue="" ref="logged"/>
            </div>
         </div>
        </Dialog>
      );
    }
    return (
      <div style={{ margin: 20 }}>
        <p>
          <button className="btn btn-primary" onClick={this.onClick}>Create</button>
        </p>
        {dialog}
      </div>
    );
  }
}

//action  
const handleGETDATA = {  
    type:'GETDATA'  
} 

export default withRouter(CreateNewIssueButton);
