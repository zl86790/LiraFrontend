/**
 * 
 */
import Collapse from 'react-collapse';
import './IssueDetailDetails.css';

var IssueDetailDetails = React.createClass({
	
	getInitialState: function() {
        return {openDetails: true};
    },

	showDetails: function(event) {
		this.setState({openDetails: !this.state.openDetails});
	},

	render: function() {
		var openDetails = this.state.openDetails ? true : false;
		return (
			<div className="issueDetailDetailsDiv">
				<div style={{clear:'both'}} onClick={this.showDetails}>Details</div>
				<div>
					<Collapse isOpened={openDetails}>
					  <div>Random content</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
});

export default IssueDetailDetails;