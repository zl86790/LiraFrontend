import './Login.css';

import DashboardDiv from '../Dashboard/Dashboard.js';

var LoginDiv = React.createClass({
	login: function(event) {
		var userName = this.refs.userName.value;
		var passWord = this.refs.passWord.value;
		var user = {userName:userName,passWord:passWord}
		$.ajax({
		    type: "POST", 
		    url: "http://localhost:8081/api/v1/prelogin/login",
		    data: JSON.stringify(user), 
		    dataType: 'json',
		    contentType: 'application/json',
		    success: function(data){ 
		    	alert("login success");
		    	ReactDOM.render(
	    			<DashboardDiv />,
	    			document.getElementById('centerDiv')
	    		);
		    },
			error: function(data){ 
		    	alert("login error");
		    }
		});
		
	},
	render: function() {
		return (
			
			<form className="form-signin">
				<img src={'/public/imgs/Lira.jpg'} alt="" width="72" height="72"/>
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label> 
				<input type="text" id="inputUserName" className="form-control" placeholder="User Name" required autoFocus ref="userName"/>
				<label htmlFor="inputPassword" className="sr-only">Password</label>  
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required ref="passWord"/>
				<button id="subButton" className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Sign in</button>
				<p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
			</form>

		)
	}
});

$(document).ready(function(){
	ReactDOM.render(
		<LoginDiv />,
		document.getElementById('centerDiv')
	);
});



	
