/**
 * 
 */
import ReactDOM from 'react-dom';

var LoginDiv = React.createClass({
	getInitialState: function() {
		return {value: 'Hello Runoob!'};
	},
		login: function(event) {
		alert(123);
				},
				render: function() {
					var value = this.state.value;
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
      			document.getElementById('center')
    		);