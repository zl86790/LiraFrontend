/**
 * 
 */
import IssuePeople from "../IssuePeople/IssuePeople.js";
import IssueDates from "../IssueDates/IssueDates.js";

import './IssueDetailLeftMenu.css';

var IssueDetailLeftMenu = React.createClass({
	render: function() {

		return (
			
				<div>
					<IssuePeople />
					<IssueDates />
				</div>
			
			
		)
	}
	
});

export default IssueDetailLeftMenu;

