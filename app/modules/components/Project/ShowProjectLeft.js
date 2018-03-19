/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { BrowserRouter  as Router, Route, Link, browserHistory as history, Switch, withRouter } from "react-router-dom";

class ShowProjectLeft extends React.Component {
	
	
	constructor(props) {
		super(props);
	}
	
	
	goCreateProject() {
		this.props.history.push('/public/CreateProject.html');
	}

	render() {

		return (
				
		      <div>
			      <div style={{ margin: 20 }}>
			        <p>
			          <button className="btn btn-primary" onClick={this.goCreateProject.bind(this)}>Create Project</button>
			        </p>
			      </div>
		      </div>
			
		)
	}
	
};

export default withRouter(ShowProjectLeft);
