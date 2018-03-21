/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';


import IssuePeople from "../../components/Issue/IssuePeople/IssuePeople.js";
import IssueDates from "../../components/Issue/IssueDates/IssueDates.js";
import IssueTimeTrack from "../../components/Issue/IssueTimeTrack/IssueTimeTrack.js";

import IssueDetailTitle from "../../components/Issue/IssueDetailTitle/IssueDetailTitle.js";
import IssueDetailTitleButton from "../../components/Issue/IssueDetailTitleButton/IssueDetailTitleButton.js";
import IssueDetailDetails from "../../components/Issue/IssueDetailDetails/IssueDetailDetails.js";
import IssueDetailDescription from "../../components/Issue/IssueDetailDescription/IssueDetailDescription.js";
import IssueDetailActionsTab from "../../components/Issue/IssueDetailActionsTab/IssueDetailActionsTab.js";

import './IssueDetailPage.css';

class IssueDetail extends React.Component {
	render() {

		return (
				
			<div>
				<div id="centerDiv">
					<div id="centerLeftDiv">
						<div style={{paddingTop:20}}>
							<IssuePeople />
							<IssueDates />
							<IssueTimeTrack />
						</div>
					</div>
					<div id="centerRightDiv">
						<IssueDetailTitle />
						<IssueDetailTitleButton />
						<IssueDetailDetails />
						<IssueDetailDescription />
						<IssueDetailActionsTab />
					</div>
				</div>
			</div>
			
			
		)
	}
	
};

export default IssueDetail;

