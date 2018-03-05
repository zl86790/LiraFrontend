/**
 * 
 */

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';

import LoginPage from '../pages/LoginPage/LoginPage.js';
import DashboardPage from '../pages/DashboardPage/DashboardPage.js';
import IssueDetailPage from '../pages/IssueDetailPage/IssueDetailPage.js';


import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, browserHistory, Switch, Redirect } from "react-router-dom";


var App = React.createClass({
	render: function() {

		return (
				<div>
					<div id="headerDiv"><Header /></div>
					<div id="centerDiv" style={{padding:60}}>
						<Switch>
					      <Route exact path='/public/' component={LoginPage}/>
					      <Route exact path='/public/Dashboard.html' component={DashboardPage}/>
					      <Route exact path='/public/IssueDetail.html' component={IssueDetailPage}/>
					      <Redirect from='' to="/public/" />
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

