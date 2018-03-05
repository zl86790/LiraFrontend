/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';

import './IssueDetailDetails.css';

class IssueDetailDetails extends React.Component {
	
	getInitialState() {
        return {openDetails: true};
    }

	showDetails(event) {
		this.setState({openDetails: !this.state.openDetails});
	}

	render() {
		var openDetails = this.state.openDetails ? true : false;
		return (
			<div className="issueDetailDetailsDiv">
				<div style={{float:'left'}} onClick={this.showDetails}>Details&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openDetails}>
						<div style={{height:40}}>
					  		<div className="lira-detail-label">Type:</div>
					  		<div className="lira-detail-content">Bug</div>
					  		<div className="lira-detail-label">Status:</div>
					  		<div className="lira-detail-content">Open</div>
					  		<div className="lira-detail-label">Priority:</div>
					  		<div className="lira-detail-content">High</div>
					  		<div className="lira-detail-label">Resolution:</div>
					  		<div className="lira-detail-content">Unresolved</div>
					  		<div className="lira-detail-label">Labels:</div>
					  		<div className="lira-detail-content">Helloworld</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};

export default IssueDetailDetails;