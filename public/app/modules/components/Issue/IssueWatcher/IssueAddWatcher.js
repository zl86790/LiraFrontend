import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';

import axios from 'axios';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

class IssueAddWatcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}; 
		this.watch = this.watch.bind(this);
	}
	
	watch(){
		var _this = this;
		axios.post(Global.serverpath+'/api/v1/postlogin/issuewatcher', 
	 			  {
						issue_id:_this.props.issue_id
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		 alert("Update success");
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	render() {
		return (
			<div>
				<button className="btn btn-primary" onClick={this.watch}>Watch this issue</button>
			</div>
		)
		
	}
}

export default withRouter(IssueAddWatcher);