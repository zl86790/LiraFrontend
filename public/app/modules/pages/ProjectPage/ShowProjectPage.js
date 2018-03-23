/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './CreateProjectPage.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import ShowProjectLeft from "../../components/Project/ShowProjectLeft.js";
import ShowProjectMid from "../../components/Project/ShowProjectMid.js";

class ShowProjectPage extends React.Component {
	render() {

		return (
				
			<div>
				<div id="centerDiv">
					<div id="centerLeftDiv">
						<ShowProjectLeft />
					</div>
					<div id="centerRightDiv">
						<ShowProjectMid />
					</div>
				</div>
			</div>
			
		)
	}
	
};

export default ShowProjectPage;
