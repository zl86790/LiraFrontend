/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueDetailDescription.css';

var IssueDetailDescription = React.createClass({
	
	getInitialState: function() {
        return {openDescription: true};
    },

	showDescription: function(event) {
		this.setState({openDescription: !this.state.openDescription});
	},

	render: function() {
		var openDescription = this.state.openDescription ? true : false;
		return (
			<div className="issueDetailDescriptionDiv">
				<div style={{float:'left'}} onClick={this.showDescription}>Description&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openDescription}>
						<div style={{height:200}}>
					  		This is a morkup description, this is a morkup description
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
});

export default IssueDetailDescription;