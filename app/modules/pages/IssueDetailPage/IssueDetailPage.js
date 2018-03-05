/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';


import IssuePeople from "../../components/IssuePeople/IssuePeople.js";
import IssueDates from "../../components/IssueDates/IssueDates.js";
import IssueTimeTrack from "../../components/IssueTimeTrack/IssueTimeTrack.js";

import IssueDetailTitle from "../../components/IssueDetailTitle/IssueDetailTitle.js";
import IssueDetailTitleButton from "../../components/IssueDetailTitleButton/IssueDetailTitleButton.js";
import IssueDetailDetails from "../../components/IssueDetailDetails/IssueDetailDetails.js";
import IssueDetailDescription from "../../components/IssueDetailDescription/IssueDetailDescription.js";
import IssueDetailActionsTab from "../../components/IssueDetailActionsTab/IssueDetailActionsTab.js";

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

