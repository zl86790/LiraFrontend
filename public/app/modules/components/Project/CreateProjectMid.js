/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

class CreateProjectMid extends React.Component {
	
	createProject = () => {
		  var _this = this;
		  let projectName = this.refs.projectName.value;
		  let projectKey = this.refs.projectKey.value;
		  let projectLeader = this.refs.projectLeader.value;
		  let projectType = this.refs.projectType.value;
		  let projectCategory = this.refs.projectCategory.value;
		  let projectUrl = this.refs.projectUrl.value;
	 	  axios.post(Global.serverpath+'/api/v1/postlogin/project',
	 			  {
	 		  			name:projectName,
	 		  			project_key:projectKey,
	 		  			leader:projectLeader,
	 		  			type:projectType,
	 		  			category:projectCategory,
	 		  			url:projectUrl,
	 		  			updated_time:new Date().toJSON()
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.tokenObject.lira_token,
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Create success");
	 		 _this.props.history.push('/ShowProject.html');
	 	  }).catch(function (error) {
	 		 alert("create error"+error);
	 	  });
	}
	
	
	render() {

		return (
				
		      <div style={{textAlign:'left',paddingTop:5}}>
		      	<label for="projectName">Project Name</label>
		      	<input type="text" className="form-control" id="projectName" placeholder="Project Name" defaultValue="" required ref="projectName"/>
		      	<div class="invalid-feedback">
		      		Valid project name is required.
                </div>
		      	
		      	<label for="projectName">Project Key</label>
		      	<input type="text" className="form-control" id="projectKey" placeholder="Project Key" defaultValue="" required ref="projectKey"/>
		      	<div class="invalid-feedback">
		      		Valid project key is required.
                </div>
		      	
		      	<label for="projectName">Project Leader</label>
		      	<input type="text" className="form-control" id="projectLeader" placeholder="Project Leader" defaultValue="" required ref="projectLeader"/>
		      	<div class="invalid-feedback">
		      		Valid project leader is required.
                </div>
		      	
		      	<label for="projectName">Project Type</label>
		      	<input type="text" className="form-control" id="projectType" placeholder="Project Type" defaultValue="" required ref="projectType"/>
		      	<div class="invalid-feedback">
		      		Valid project type is required.
                </div>
		      	
		      	<label for="projectName">Project Category</label>
		      	<input type="text" className="form-control" id="projectCategory" placeholder="Project Category" defaultValue="" required ref="projectCategory"/>
		      	<div class="invalid-feedback">
		      		Valid project category is required.
                </div>
		      	
		      	<label for="projectName">Project URL</label>
		      	<input type="text" className="form-control" id="projectUrl" placeholder="Project URL" defaultValue="" required ref="projectUrl"/>
		      	<div class="invalid-feedback">
		      		Valid project url is required.
                </div>
		      	
		      	<button id="createProjectButton" className="btn btn-lg btn-primary btn-block" type="button" onClick={this.createProject.bind(this)}>Create Project</button>
		      </div>
			
		)
	}
	
};

export default withRouter(CreateProjectMid);