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

	
const IssueList = (props) => 
<div>
	<div className="asstm-table-title">Issues</div>
	<ReactTable data={props.data} columns={props.columns} 
	page={0} 
	pageSize={10}
	pages={props._pageCount}
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
  	          props.history.push(path);
  	        }
  	      }
  	    }
  	  }}
	/>
	<Pagination onChange={props.onPageChange} current={props.current} total={props.total} pageSize={10} style={{ marginTop: '30px' }}/>
</div>

export default IssueList;