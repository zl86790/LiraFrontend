/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssuePeople.css';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

class IssuePeople extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openPeople: true};  
		this.showPeople = this.showPeople.bind(this);
	}

	showPeople(event) {
		this.setState({openPeople: !this.state.openPeople});
	}

	render() {
		const {value} = this.props;
		if(value._data==undefined){
			value._data = new Object();
		}
		var openPeople = this.state.openPeople ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showPeople}>People&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openPeople}>
						<div style={{}}>
					  		<div>Assignee: {value._data.assignee_name}</div>
					  		<div>Reporter: {value._data.reporter_name}</div>
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

IssuePeople = connect(mapStateToProps, mapDispatchToProps)(IssuePeople)

export default IssuePeople;