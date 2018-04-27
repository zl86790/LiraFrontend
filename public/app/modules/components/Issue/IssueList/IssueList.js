import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

import 'react-table/react-table.css'

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';

import store from '../../../App/Store.js';

import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

class IssueList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
				current: 1,
				issuelistdata: []
		}; 
		
		this.onPageChange = this.onPageChange.bind(this);
	}
	componentWillMount() {
		this.fetchData(0);
	}
	
	fetchData(pageNumber){
		let url = Global.serverpath+'/api/v1/postlogin/issues';
		let _this = this;
   	 	axios.get(url, {
		    params: {
		      pageNumber:pageNumber,
		      rowNumber:10
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETISSUELISTDATA.payload.data=response.data;
			  handleGETISSUELISTDATA.payload.pageNumber = pageNumber;
			  _this.getIssueCounts()
		  }).catch(function (error) {
			alert("load error");
		  });
	}
	
	getIssueCounts() {
		let url = Global.serverpath+'/api/v1/postlogin/issueCounts';
   	 	axios.get(url, {
		    params: {
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETISSUELISTDATA.payload.issueCounts=response.data;
			  store.dispatch(handleGETISSUELISTDATA);
		  }).catch(function (error) {
			alert("load total page number error");
		  });
	}
	
	
	
	onPageChange(pageIndex){
		this.fetchData(pageIndex-1);
		this.setState({
		      current: pageIndex,
		    });
	}

	render() {

		  const {value} = this.props;  
		
		  const columns = [{
		    Header: 'Type',
		    accessor: 'type' 
		  }, {
		    Header: 'Key',
		    accessor: 'issue_key'
		  }, {
		    Header: 'Summary',
		    accessor: 'summary'
		  }, {
			  Header: 'Priority',
			  accessor: 'priority'
		  }];
		  
		  return (
				  <div>
				  	<div className="asstm-table-title">Issues</div>
				  	<ReactTable data={value._data} columns={columns} 
				  	page={0} 
				    pageSize={10}
				  	pages={value._pageCount}
				  	showPagination={false}
				  	loading={false}
				  	showPageSizeOptions={false}
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
					  	          alert(rowInfo.original.id);
					  	          var data = {issueId:rowInfo.original.id};  
						  	      var path = {  
						  	        pathname:'/IssueDetail',  
						  	        state:data,  
						  	      }  
					  	          this.props.history.push(path);
					  	        }
					  	      }
					  	    }
					  	  }}
				  	/>
				  	<Pagination onChange={this.onPageChange} current={this.state.current} total={value.issueCounts} pageSize={10} style={{ marginTop: '30px' }}/>
				  </div>
		  );
		 
	}
	
};



//action  
const handleGETISSUELISTDATA = {  
    type:'GETISSUELISTDATA',
    payload:{}
}  



//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { value: state.issuelistdata }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
//    	handleIncrement:()=>dispatch(handleGETDATA),  
//    	handleDecrement:()=>dispatch(handleDecrement)  
    }  
}  

IssueList = connect(mapStateToProps, mapDispatchToProps)(IssueList)  

export default withRouter(IssueList);