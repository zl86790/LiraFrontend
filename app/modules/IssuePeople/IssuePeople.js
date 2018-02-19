/**
 * 
 */
import Collapse from 'react-collapse';
import './IssuePeople.css';

var IssuePeople = React.createClass({
	
	getInitialState: function() {
        return {openPeople: true};
    },

	showPeople: function(event) {
		this.setState({openPeople: !this.state.openPeople});
	},

	render: function() {
		var openPeople = this.state.openPeople ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showPeople}>People&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openPeople}>
						<div style={{}}>
					  		<div>Assignee: Lizhe</div>
					  		<div>Reporter: Lizhe</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
});

export default IssuePeople;