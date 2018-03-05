import './AssignedToMe.css';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import 'react-table/react-table.css'


var AssignedToMe = React.createClass({
	getInitialState: function() {
        return {_data: []};
    },
	componentDidMount: function() {
		var _this = this;
		$.ajax({
		    type: "GET", 
		    url: "http://localhost:8081/api/v1/postlogin/issues",
		    data: 'name=Lizhe', 
		    dataType: 'json',
		    contentType: 'application/json',
		    headers: {
		    	lira_token: Global.tokenObject.lira_token
		    },
		    success: function(_data){ 
		    	alert(JSON.stringify(_data));
		    	_this.setState({_data:_data});
		    },
			error: function(data){ 
		    	alert("load error");
		    }
		});
	},

	render() {

		  const columns = [{
		    Header: 'Type',
		    accessor: 'type' 
		  }, {
		    Header: 'Key',
		    accessor: 'name'
		  }, {
		    Header: 'Summary',
		    accessor: 'summary'
		  }, {
			  Header: 'Priority',
			  accessor: 'priority'
		  }];
		  
		  return (
				  <div>
				  	<div className="asstm-table-title">Assigned to me</div>
				  	<ReactTable data={this.state._data} columns={columns} 
					  	getTdProps={(state, rowInfo, column, instance) => {
					  	    return {
					  	      onClick: (e, handleOriginal) => {
					  	        console.log('A Td Element was clicked!')
					  	        console.log('it produced this event:', e)
					  	        console.log('It was in this column:', column)
					  	        console.log('It was in this row:', rowInfo)
					  	        console.log('It was in this table instance:', instance)
					  	 
					  	        // IMPORTANT! React-Table uses onClick internally to trigger
					  	        // events like expanding SubComponents and pivots.
					  	        // By default a custom 'onClick' handler will override this functionality.
					  	        // If you want to fire the original onClick handler, call the
					  	        // 'handleOriginal' function.
					  	        if (handleOriginal) {
					  	          alert(rowInfo.original.name);
					  	          this.props.history.push('/public/IssueDetail.html');
					  	        }
					  	      }
					  	    }
					  	  }}
				  	/>
				  </div>
		  );
		 
	}
	
});

export default withRouter(AssignedToMe);