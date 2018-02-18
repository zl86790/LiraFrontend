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
				<div style={{float:'left'}} onClick={this.showDetails}>Details&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
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