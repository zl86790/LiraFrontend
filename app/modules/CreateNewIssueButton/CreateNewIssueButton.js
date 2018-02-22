
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';

import './CreateNewIssueButton.css';

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
  onClose = () => {
    this.setState({
      visible: false,
    });
  }
  onSave = () => {
	  
	var _this = this;
	  
  	var issue = new Object();
  	issue.name = "Lizhe";
  	issue.type = "Bug";
  	issue.priority = "High";
  	issue.labels = "Bug";
  	issue.status = "Open";
  	issue.description = "This is a mockup description";
  	issue.assignee = 1;
  	issue.reporter = 1;
  	issue.created_time = "2018-01-01";
  	issue.updated_time = "2018-01-01";
  	issue.resolved_time = "2018-01-01";
  	issue.estimated = 8;
  	issue.remaining = 8;
  	issue.logged = 0;
  	
	$.ajax({
	    type: "POST", 
	    url: "http://localhost:8081/api/v1/postlogin/issue",
	    data: JSON.stringify(issue), 
	    dataType: 'json',
	    contentType: 'application/json',
	    headers: {
	    	lira_token: "eyJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoxNTE5MjgxODMyNTM5LCJleHAiOjE1MjI4ODE4MzIsInVzZXJuYW1lIjoiYWRtaW4ifQ.SiqqPfRC-I3AM4gLHQ2bCkUEKKoMqoezJXAFA4hzipFzyzT6YQHtiNY3OQMdo3x3NzfhZNyGgttJolCDzA9C2Q"
	    },
	    beforeSend: function(request) {
            request.setRequestHeader("Test", "Chenxizhang");
        },
	    success: function(data){ 
	    	alert("Create success");
	    	_this.setState({
    	      visible: false,
    	    });
	    },
		error: function(data){ 
	    	alert("login error");
	    }
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
                onClick={this.onSave}
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
	          <div className="create-new-issue-content" style={{paddingTop:45}}>Project1</div>
	          
	          <div className="create-new-issue-label" style={{}}>Issue Type:</div>
	          <div className="create-new-issue-content" style={{}}>Bug</div>
	          
	          <div className="create-new-issue-label" style={{}}>Name:</div>
	          <div className="create-new-issue-content" style={{}}>
	          	<input type="text" id="name" className="form-control" placeholder="Name" required autoFocus defaultValue=""/>
	          </div>
          	
          	<div className="create-new-issue-label" style={{}}>Priority:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="priority" className="form-control" placeholder="Priority" required defaultValue=""/>
            </div>
            	
        	<div className="create-new-issue-label" style={{}}>Description:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="description" className="form-control" placeholder="Description" required defaultValue=""/>
            </div>	
            
        	<div className="create-new-issue-label" style={{}}>Assignee:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="assignee" className="form-control" placeholder="Assignee" required defaultValue=""/>
            </div>
            	
        	<div className="create-new-issue-label" style={{}}>Reporter:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="reporter" className="form-control" placeholder="Reporter" required defaultValue=""/>
            </div>
                	
        	<div className="create-new-issue-label" style={{}}>Labels:</div>
            <div className="create-new-issue-content" style={{}}>
            	<input type="text" id="labels" className="form-control" placeholder="Labels" required defaultValue=""/>
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

export default CreateNewIssueButton;
