/**
 * 
 */
import ReactDOM from 'react-dom';


var HeaderDiv = React.createClass({
	render: function() {
		return (
				
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
			    <h5 className="my-0 mr-md-auto font-weight-normal">Lira</h5>
			    <nav className="my-2 my-md-0 mr-md-3">
			      <a className="p-2 text-dark" href="#">Features</a>
			      <a className="p-2 text-dark" href="#">Enterprise</a>
			      <a className="p-2 text-dark" href="#">Support</a>
			      <a className="p-2 text-dark" href="#">Pricing</a>
			    </nav>
			    <a className="btn btn-outline-primary" href="#">Sign up</a>
			</div>
			
		)
	}
	
});

var LoginDiv = React.createClass({
	login: function(event) {
		alert(123);
		this.serverRequest = $.get("http://192.168.1.2:8081/login.do", function (result) {
			alert(result);
		}.bind(this));
	},
	render: function() {
		return (
			
			<form className="form-signin">
				<img src={'/public/imgs/Lira.jpg'} alt="" width="72" height="72"/>
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label> 
				<input type="text" id="inputUserName" className="form-control" placeholder="User Name" required autoFocus />
				<label htmlFor="inputPassword" className="sr-only">Password</label>  
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
				<button id="subButton" className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Sign in</button>
				<p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
			</form>

		)
	}
});
ReactDOM.render(
	<HeaderDiv />,
	document.getElementById('headerDiv')
);
ReactDOM.render(
	<LoginDiv />,
	document.getElementById('centerDiv')
);