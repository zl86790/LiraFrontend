import './Login.css';

import DashboardDiv from '../Dashboard/Dashboard.js';

var LoginDiv = React.createClass({
	login: function(event) {
		var user = {userName:"admin",passWord:"admin"}
		$.ajax({
		    type: "POST", 
		    url: "http://192.168.1.2:8081/api/prelogin/login",
		    data: JSON.stringify(user), 
		    dataType: 'json',
		    contentType: 'application/json',
		    success: function(data){ 
		    	alert(data);
		    	ReactDOM.render(
	    			<DashboardDiv />,
	    			document.getElementById('centerDiv')
	    		);
		    }
		});
		
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
	<LoginDiv />,
	document.getElementById('centerDiv')
);

	
