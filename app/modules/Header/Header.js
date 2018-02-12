/**
 * 
 */

import './Header.css';

var HeaderDiv = React.createClass({
	render: function() {

		return (
				
				<header>
			      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top border-bottom box-shadow">
			        <a className="navbar-brand" href="#">Lira</a>
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="navbar-toggler-icon"></span>
			        </button>
			        <div className="collapse navbar-collapse" id="navbarCollapse">
			          <ul className="navbar-nav mr-auto">
			            <li className="nav-item active">
			              <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="#">Projects</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link disabled" href="#">Issues</a>
			            </li>
			          </ul>
			          <form className="form-inline mt-2 mt-md-0">
			            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
			            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			          </form>
			        </div>
			      </nav>
			    </header>
			
		)
	}
	
});

$(document).ready(function(){
	ReactDOM.render(
		<HeaderDiv />,
		document.getElementById('headerDiv')
	);
});

