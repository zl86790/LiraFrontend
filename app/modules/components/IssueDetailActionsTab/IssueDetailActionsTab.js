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
import IssueComments from "../IssueComments/IssueComments.js";
import IssueHistory from "../IssueHistory/IssueHistory.js";

var callback = function(key){
	 
}



class IssueDetailActionsTab extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
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

