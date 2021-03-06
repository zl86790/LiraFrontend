import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';

import axios from 'axios';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../../App/Store.js';

class IssueAddWatcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				showStartWatching:true,
				showStopWatching:'none'
		}; 
		this.startwatch = this.startwatch.bind(this);
		this.stopwatch = this.stopwatch.bind(this);
	}
	
	componentWillMount() {
		let url = Global.serverpath+'/api/v1/postlogin/watchstatus';
		var _this = this;
		axios.get(url, {
		    params: {
		    	issue_id: _this.props.issue_id
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  console.log(response.data);
			  var count = Boolean(response.data);
			  if(count==true){
				  console.log("goto true")
				  _this.setState({
			 			showStartWatching:'none',
						showStopWatching:true
				  });
			  }else{
				  console.log("goto false")
				  _this.setState({
			 			showStartWatching:true,
						showStopWatching:'none'
				  });
			  }
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	}
	
	startwatch(){
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
	 		_this.setState({
	 			showStartWatching:'none',
				showStopWatching:true
			});
	 		let url = Global.serverpath+'/api/v1/postlogin/issuewatchers';
	   	 	axios.get(url, {
			    params: {
			      issue_id:_this.props.issue_id
			    },
			    headers: {
			      "lira_token": Global.getCookie('lira_token')
			    }
			  })
			  .then(function (response) {
				  handleGETWATCHERSDATA.payload=response.data;
				  store.dispatch(handleGETWATCHERSDATA);
			  }).catch(function (error) {
				alert(error);
			  });
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	stopwatch(){
		var _this = this;
		axios.post(Global.serverpath+'/api/v1/postlogin/issuewatcher/delete', 
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
	 		_this.setState({
	 			showStartWatching:true,
				showStopWatching:'none'
			});
	 		let url = Global.serverpath+'/api/v1/postlogin/issuewatchers';
	   	 	axios.get(url, {
			    params: {
			      issue_id:_this.props.issue_id
			    },
			    headers: {
			      "lira_token": Global.getCookie('lira_token')
			    }
			  })
			  .then(function (response) {
				  handleGETWATCHERSDATA.payload=response.data;
				  store.dispatch(handleGETWATCHERSDATA);
			  }).catch(function (error) {
				alert(error);
			  });
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	render() {
		return (
			<div>
				<button style={{display:this.state.showStartWatching}} className="btn btn-primary" onClick={this.startwatch}>Start Watching</button>
				<button style={{display:this.state.showStopWatching}} className="btn btn-primary" onClick={this.stopwatch}>Stop Watching</button>
			</div>
		)
		
	}
}

const handleGETWATCHERSDATA = {  
		type:'GETWATCHERSDATA'  
	}  

function mapStateToProps(state) {  
    return { watchersvalue: state.watchersdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueAddWatcher = connect(mapStateToProps, mapDispatchToProps)(IssueAddWatcher)  

export default withRouter(IssueAddWatcher);