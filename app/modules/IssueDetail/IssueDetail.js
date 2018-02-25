/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import IssueDetailTitle from "../IssueDetailTitle/IssueDetailTitle.js";


import IssueDetailTitleButton from "../IssueDetailTitleButton/IssueDetailTitleButton.js";
import IssueDetailDetails from "../IssueDetailDetails/IssueDetailDetails.js";
import IssueDetailDescription from "../IssueDetailDescription/IssueDetailDescription.js";
import IssueDetailActionsTab from "../IssueDetailActionsTab/IssueDetailActionsTab.js";

import './IssueDetail.css';

var IssueDetail = React.createClass({
	render: function() {

		return (
			
				<div>
					<IssueDetailTitle />
					<IssueDetailTitleButton />
					<IssueDetailDetails />
					<IssueDetailDescription />
					<IssueDetailActionsTab />
				</div>
			
			
		)
	}
	
});

export default IssueDetail;

