/**
 * 
 */
import Collapse from 'react-collapse';
import './IssueTimeTrack.css';

var IssueTimeTrack = React.createClass({
	
	getInitialState: function() {
        return {openIssueTimeTrack: true};
    },

	showIssueTimeTrack: function(event) {
		this.setState({openIssueTimeTrack: !this.state.openIssueTimeTrack});
	},

	render: function() {
		var openIssueTimeTrack = this.state.openIssueTimeTrack ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showIssueTimeTrack}> Time Track&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openIssueTimeTrack}>
						<div style={{}}>
					  		<div>Estimated: 8h</div>
					  		<div>Remaining: 8h</div>
					  		<div>Logged: 0h</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
});

export default IssueTimeTrack;