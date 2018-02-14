/**
 * 
 */
import IssueDetailTitle from "../IssueDetailTitle/IssueDetailTitle.js";
import IssueDetailTitleButton from "../IssueDetailTitleButton/IssueDetailTitleButton.js";
import IssueDetailDetails from "../IssueDetailDetails/IssueDetailDetails.js";

import './IssueDetail.css';

var IssueDetail = React.createClass({
	render: function() {

		return (
			
				<div>
					<IssueDetailTitle />
					<IssueDetailTitleButton />
					<IssueDetailDetails />
				</div>
			
			
		)
	}
	
});

export default IssueDetail;

