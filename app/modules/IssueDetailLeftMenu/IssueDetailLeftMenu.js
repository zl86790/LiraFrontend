/**
 * 
 */
import IssuePeople from "../IssuePeople/IssuePeople.js";
import IssueDates from "../IssueDates/IssueDates.js";
import IssueTimeTrack from "../IssueTimeTrack/IssueTimeTrack.js";

import './IssueDetailLeftMenu.css';

var IssueDetailLeftMenu = React.createClass({
	render: function() {

		return (
			
				<div style={{paddingTop:20}}>
					<IssuePeople />
					<IssueDates />
					<IssueTimeTrack />
				</div>
			
			
		)
	}
	
});

export default IssueDetailLeftMenu;

