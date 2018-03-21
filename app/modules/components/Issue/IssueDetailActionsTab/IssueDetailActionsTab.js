import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import store from '../../../App/Store.js';

import "./IssueDetailActionsTab.css";
import IssueComments from "../IssueComments/IssueComments.js";
import IssueHistory from "../IssueHistory/IssueHistory.js";
import IssueWatcher from "../IssueWatcher/IssueWatcher.js";

var callback = function(key){
	 
}



class IssueDetailActionsTab extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	render() {

		return (
				
				<Tabs
			      defaultActiveKey="1"
			      onChange={callback}
			      renderTabBar={()=><ScrollableInkTabBar />}
			      renderTabContent={()=><TabContent />}
			    >
			      <TabPane tab='Comments' key="1">
			      	<IssueComments />
			      </TabPane>
			      <TabPane tab='History' key="2">
			      	<IssueHistory />
			      </TabPane>
			      <TabPane tab='Watchers' key="3">
			      	<IssueWatcher />
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

