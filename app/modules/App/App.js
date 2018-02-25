/**
 * 
 */

import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Dashboard from '../Dashboard/Dashboard.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, browserHistory, Switch, Redirect } from "react-router-dom";
import { hashHistory } from 'react-router';


var App = React.createClass({
	render: function() {

		return (
				<div>
					<div id="headerDiv"><Header /></div>
					<div id="centerDiv" style={{padding:60}}>
						<Switch>
					      <Route exact path='/' component={Login}/>
					      <Route exact path='/Login' component={Login}/>
					      <Route exact path='/Dashboard' component={Dashboard}/>
					      <Redirect from='' to="/Login" />
					    </Switch>
					</div>
					<div id="footerDiv"><Footer /></div>
				</div>
		)
	}
	
});



ReactDOM.render(
	<Router history={browserHistory}>
		<App />
	</Router>
	,document.getElementById('root')
);

