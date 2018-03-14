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

import "./IssueDetailActionsTab.css";

var callback = function(key){
	 
}



class IssueDetailActionsTab extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let url = 'http://localhost:8081/api/v1/postlogin/comments';
   	 	axios.get(url, {
		    params: {
		      issue_id:57
		    },
		    headers: {
		      "lira_token": Global.tokenObject.lira_token
		    }
		  })
		  .then(function (response) {
			  handleGETCOMMENTSDATA.payload=response.data;
			  store.dispatch(handleGETCOMMENTSDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {

		const {commentsvalue} = this.props;  
		if(commentsvalue._commentsdata==undefined){
			commentsvalue._commentsdata = [];
		}
		
		return (
				
				<Tabs
			      defaultActiveKey="1"
			      onChange={callback}
			      renderTabBar={()=><ScrollableInkTabBar />}
			      renderTabContent={()=><TabContent />}
			    >
			      <TabPane tab='Comments' key="1">
				      {commentsvalue._commentsdata.map((content,index) =>  
				      <ListItem value={number} />  
				      )} 
			      	<hr/>1. Morckup comment 1 here 
			      	<hr/>2. Morckup comment 1 here 
			      	<hr/>3. Morckup comment 1 here 
			      	<hr/>4. Morckup comment 1 here 
			      	<hr/>5. Morckup comment 1 here 
			      	<hr/>6. Morckup comment 1 here 
			      	<hr/>7. Morckup comment 1 here 
			      </TabPane>
			      <TabPane tab='History' key="2">
			      	<hr/>1. Added details 
			      	<hr/>2. Added descriptions 
			      	<hr/>3. Added tab panels 
			      	<hr/>4. Update the page style 
			      	<hr/>1. Morckup comment 1 here 
			      	<hr/>2. Morckup comment 1 here 
			      	<hr/>3. Morckup comment 1 here 
			      	<hr/>4. Morckup comment 1 here 
			      	<hr/>5. Morckup comment 1 here 
			      	<hr/>6. Morckup comment 1 here 
			      	<hr/>7. Morckup comment 1 here 
			      </TabPane>
			      <TabPane tab='Watchers' key="3">
			      	<hr/>1. Lizhe
			      </TabPane>
			    </Tabs>
			
		)
	}
	
};

const handleGETCOMMENTSDATA = {  
	type:'GETCOMMENTSDATA'  
}  

function mapStateToProps(state) {  
    return { commentsvalue: state.commentsdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueDetailActionsTab = connect(mapStateToProps, mapDispatchToProps)(IssueDetailActionsTab)  

export default IssueDetailActionsTab;

