/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueDates.css';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';
import LabelDatePicker from "../../common/LabelDatePicker/LabelDatePicker.js";

class IssueDates extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openIssueDates: true};
		this.showIssueDates = this.showIssueDates.bind(this);
		this.changeUpdateDate = this.changeUpdateDate.bind(this);
	}

	showIssueDates(event) {
		this.setState({openIssueDates: !this.state.openIssueDates});
	}
	
	changeUpdateDate(){
		console.log("changeUpdateDate");
		this.props.refreshData();
	}

	render() {
	
		const {value} = this.props;
		if(value._data==undefined){
			value._data = new Object();
		}
		
		var openIssueDates = this.state.openIssueDates ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showIssueDates}>Dates&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openIssueDates}>
						<div style={{}}>
					  		<div>Created: {value._data.created_time_formatted}</div>
					  		<div>Updated: <LabelDatePicker initValue={value._data.updated_time_formatted} pickerId="updateDate" pickerName="updateDate" pickerRef="updateDate" callBackFunction={this.changeUpdateDate}/></div>
					  		<div>Resolved: {value._data.resolved_time_formatted}</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};


function mapStateToProps(state) {  
  return { value: state.issuedata }  
}  

function mapDispatchToProps(dispatch){  
  return{  
  }  
}  

IssueDates = connect(mapStateToProps, mapDispatchToProps)(IssueDates)  

export default IssueDates;