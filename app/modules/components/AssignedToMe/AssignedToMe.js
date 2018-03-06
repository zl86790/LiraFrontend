import './AssignedToMe.css';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import 'react-table/react-table.css'

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';

import store from '../../App/Store.js';

class AssignedToMe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ass2medata: []};  
	}
	componentWillMount() {
		let url = 'http://localhost:8081/api/v1/postlogin/issues';
   	 	axios.get(url, {
		    params: {
		      
		    },
		    headers: {
		      "lira_token": Global.tokenObject.lira_token
		    }
		  })
		  .then(function (response) {
			  handleGETDATA.payload=response.data;
			  store.dispatch(handleGETDATA);
		  }).catch(function (error) {
			alert("load error");
		  });
	}

	render() {

		  const {value} = this.props;  
		
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
				  	<ReactTable data={value._data} columns={columns} 
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



//action  
const handleGETDATA = {  
    type:'GETDATA'  
}  



//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { value: state.ass2medata }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
//    	handleIncrement:()=>dispatch(handleGETDATA),  
//    	handleDecrement:()=>dispatch(handleDecrement)  
    }  
}  

AssignedToMe = connect(mapStateToProps, mapDispatchToProps)(AssignedToMe)  

export default withRouter(AssignedToMe);