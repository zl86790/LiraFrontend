/**
 * 
 */

import './Dashboard.css';

var DashboardDiv = React.createClass({
	render: function() {
		return (
			<div id="dashboardDiv">
				<div id="dashboardLeftMenuDiv">
					menu
				</div>
				<div id="dashboardCenterDiv">
					content
				</div>
			</div>
		)
	}
});

export default DashboardDiv;