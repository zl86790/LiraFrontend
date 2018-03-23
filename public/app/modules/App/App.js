/**
 * 
 */

import Header from '../components/Header/Header.js';
import HeaderPrelogin from '../components/Header/HeaderPrelogin.js';
import Footer from '../components/Footer/Footer.js';

import LoginPage from '../pages/LoginPage/LoginPage.js';
import DashboardPage from '../pages/DashboardPage/DashboardPage.js';
import IssueDetailPage from '../pages/IssueDetailPage/IssueDetailPage.js';
import CreateProjectPage from '../pages/ProjectPage/CreateProjectPage.js';
import ShowProjectPage from '../pages/ProjectPage/ShowProjectPage.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from './Store.js';

import { BrowserRouter as Router, Route, Link, browserHistory, Switch, Redirect } from "react-router-dom";


class App extends React.Component {
	render() {

		return (
				<Provider store={store}> 
				<div>
					<div id="headerDiv">
						<Switch>
							<Route exact path='/' component={HeaderPrelogin}/>
							<Route exact path='/Dashboard.html' component={Header}/>
						    <Route exact path='/IssueDetail.html' component={Header}/>
						    <Route exact path='/CreateProject.html' component={Header}/>
						    <Route exact path='/ShowProject.html' component={Header}/>
							<Redirect from='' to="/" />
						</Switch>
					</div>
					<div id="centerDiv" style={{padding:60}}>
						<Switch>
					      <Route exact path='/' component={LoginPage}/>
					      <Route exact path='/Dashboard.html' component={DashboardPage}/>
					      <Route exact path='/IssueDetail.html' component={IssueDetailPage}/>
					      <Route exact path='/CreateProject.html' component={CreateProjectPage}/>
					      <Route exact path='/ShowProject.html' component={ShowProjectPage}/>
					      <Redirect from='' to="/" />
					    </Switch>
					</div>
					<div id="footerDiv"><Footer /></div>
				</div>
				</Provider>
		)
	}
	
}



ReactDOM.render(
	<Router history={browserHistory}>
		<App />
	</Router>
	,document.getElementById('root')
);

