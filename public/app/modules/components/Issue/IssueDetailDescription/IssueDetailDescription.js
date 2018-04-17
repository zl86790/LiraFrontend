/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueDetailDescription.css';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import store from '../../../App/Store.js';

import {SimditorTextarea} from './IssueDescriptionSimditorTextarea.js';

class IssueDetailDescription extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
				openDescription: true,
				descriptionEditDisplay: 'none',
				descriptionDisplay: true
		};  
		this.showDescription = this.showDescription.bind(this);
		this.clickDescription = this.clickDescription.bind(this);
	}

	showDescription(event) {
		this.setState({openDescription: !this.state.openDescription});
	}
	
	clickDescription(){
		this.setState({
			descriptionDisplay:'none',
			descriptionEditDisplay:true
		});
		
		console.log(this.props);
		this.refs.descriptionEdit.setDesEditValue(this.props.value._data.summary);
		this.refs.descriptionEdit.addDesEditValue(this.props.value._data.description);
	}

	render() {
		const {value} = this.props;  
		if(value._data==undefined){
			value._data = new Object();
		}
	
		var openDescription = this.state.openDescription ? true : false;
		return (
			<div className="issueDetailDescriptionDiv">
				<div style={{float:'left'}} onClick={this.showDescription}>Description&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openDescription}>
						<div style={{height:200,display:this.state.descriptionDisplay}} onClick={this.clickDescription}>
							<div>{value._data.summary}</div>
							<div>{value._data.description}</div>
					  	</div>
					  	<div style={{display:this.state.descriptionEditDisplay}}><SimditorTextarea id="description" ref="descriptionEdit"/></div>
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

IssueDetailDescription = connect(mapStateToProps, mapDispatchToProps)(IssueDetailDescription)  

export default IssueDetailDescription;