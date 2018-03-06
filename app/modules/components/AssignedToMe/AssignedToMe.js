import './AssignedToMe.css';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import 'react-table/react-table.css'

class AssignedToMe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ass2medata: []};  
	}
	componentDidMount() {
		alert("componentDidMount");
		store.dispatch(getAssignedToMeDataAction);
	}

	render() {
		  const {ass2medata} = this.props; 
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
				  	<ReactTable data={ass2medata} columns={columns} 
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
	
};


const getAssignedToMeDataAction = {  
    type:'GETASSIGNEDTOMEDATAACTION'  
}

function mapStateToProps(state) {  
    return { ass2medata: state.ass2medata }  
}  

function mapDispatchToProps(dispatch){  
    return{  
    	handleGetAssignedToMeData:()=>dispatch(getAssignedToMeDataAction),  
    }  
}  

AssignedToMe = connect(mapStateToProps, mapDispatchToProps)(AssignedToMe)  

export default withRouter(AssignedToMe);