import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../Global/Global.js';
import store from '../../App/Store.js';


var callback = function(key){
	 
}



class IssueComments extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let url = 'http://localhost:8081/api/v1/postlogin/issuehistories';
   	 	axios.get(url, {
		    params: {
		      issue_id:57
		    },
		    headers: {
		      "lira_token": Global.tokenObject.lira_token
		    }
		  })
		  .then(function (response) {
			  handleGETHISTORIESDATA.payload=response.data;
			  store.dispatch(handleGETHISTORIESDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {

		const {commentsvalue} = this.props;  
		if(commentsvalue._commentsdata==undefined){
			commentsvalue._commentsdata = [];
		}
		
		const listItems = commentsvalue._commentsdata.map((comments) =>   
          <div><hr/>{comments.content}</div>  
        );  
		
		return (
				
				<div>{listItems}</div>
			
		)
	}
	
};

const handleGETHISTORIESDATA = {  
	type:'GETCOMMENTSDATA'  
}  

function mapStateToProps(state) {  
    return { commentsvalue: state.commentsdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueComments = connect(mapStateToProps, mapDispatchToProps)(IssueComments)  

export default IssueComments;

