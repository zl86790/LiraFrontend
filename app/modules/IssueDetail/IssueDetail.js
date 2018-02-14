/**
 * 
 */
import IssueDetailTitle from "../IssueDetailTitle/IssueDetailTitle.js";
import IssueDetailTitleButton from "../IssueDetailTitleButton/IssueDetailTitleButton.js";

import './IssueDetail.css';

var IssueDetail = React.createClass({
	render: function() {

		return (
			
				<div>
					<IssueDetailTitle />
					<IssueDetailTitleButton />
				</div>
			
			
		)
	}
	
});

export default IssueDetail;

