/**
 * 
 */

import './Dashboard.css';

import AssignedToMeDiv from '../AssignedToMe/AssignedToMe.js';

var DashboardDiv = React.createClass({
	render: function() {
		return (
			<div id="dashboardDiv">
				<div id="dashboardLeftMenuDiv">
					menu
				</div>
				<div id="dashboardCenterDiv">
					<AssignedToMeDiv />
				</div>
			</div>
		)
	}
});

export default DashboardDiv;