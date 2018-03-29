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

import IssueCommentsSimditorTextarea from '../IssueComments/IssueCommentsSimditorTextarea.js';

var callback = function(key){
	 
}



class IssueDetailActionsTab extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	addComment(event) {
		var _this = this;
		var textareaValue = _this.refs.issueCommentsSimditorTextarea.refs.textarea.value
		$.ajax({
		    type: "POST", 
		    url: Global.serverpath+"/api/v1/prelogin/login",
		    data: JSON.stringify(user), 
		    dataType: 'json',
		    contentType: 'application/json',
		    success: function(data){ 
		    	alert(JSON.stringify(data));
		    	Global.setCookie("lira_token",data.lira_token,1);
		    	_this.props.history.push('/Dashboard');
		    },
			error: function(data){ 
		    	alert("login error");
		    }
		});
		
	}
	
	render() {

		return (
				<div>
					<div>
						<Tabs
					      defaultActiveKey="1"
					      onChange={callback}
					      renderTabBar={()=><ScrollableInkTabBar />}
					      renderTabContent={()=><TabContent />}
					    >
					      <TabPane tab='Comments' key="1">
					      	<IssueComments issue_id={this.props.issue_id}/>
					      </TabPane>
					      <TabPane tab='History' key="2">
					      	<IssueHistory />
					      </TabPane>
					      <TabPane tab='Watchers' key="3">
					      	<IssueWatcher />
					      </TabPane>
					    </Tabs>
				    </div>
			    	<div className="col-7 text-left" style={{paddingTop:15}}>
			    		<IssueCommentsSimditorTextarea ref="issueCommentsSimditorTextarea"/>
			    	</div>
			    	<a id="add-comment" title="Add comment" class="iss-detail-ti-button" href="javascript:void(0);" onClick={this.addComment.bind(this)}>Add</a>
			    </div>
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

