import './AssignedToMe.css';
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import 'react-table/react-table.css'

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'

class AssignedToMe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ass2medata: []};  
	}
	componentDidMount() {
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
		    success: function(ass2medata){ 
		    	alert(JSON.stringify(ass2medata));
		    	_this.setState({ass2medata:ass2medata});
		    },
			error: function(data){ 
		    	alert("load error");
		    }
		});
	}

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
				  	<ReactTable data={this.state.ass2medata} columns={columns} 
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
				  	<Counter />  
				  </div>
		  );
		 
	}
	
};

class Counter extends React.Component{  
	render() {  
		const {value,handleIncrement,handleDecrement} = this.props;  
		
	    return (
	        	<div><h1>{value}</h1>
	        		<button onClick={handleIncrement}>+</button>
	        		<button onClick={handleDecrement}>-</button>
	        	</div>
	    )
	}
    
}

//action  
const handleIncrement = {  
    type:'INCREMENT'  
}  
const handleDecrement = {  
    type:'DECREMENT'  
}  



//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { value: state.num }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
    	handleIncrement:()=>dispatch(handleIncrement),  
    	handleDecrement:()=>dispatch(handleDecrement)  
    }  
}  

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)  

export default withRouter(AssignedToMe);