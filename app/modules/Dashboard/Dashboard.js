/**
 * 
 */

import './Dashboard.css';
import DashboardLeftMenu from "../DashboardLeftMenu/DashboardLeftMenu.js";

import AssignedToMeDiv from '../AssignedToMe/AssignedToMe.js';

var DashboardDiv = React.createClass({
	render: function() {
		return (
			<div id="dashboardDiv">
				<div id="dashboardLeftMenuDiv">
					<DashboardLeftMenu />
				</div>
				<div id="dashboardCenterDiv">
					<AssignedToMeDiv />
				</div>
			</div>
		)
	}
});

export default DashboardDiv;