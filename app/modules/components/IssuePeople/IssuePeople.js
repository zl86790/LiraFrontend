/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssuePeople.css';

class IssuePeople extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openPeople: true};  
		this.showPeople = this.showPeople.bind(this);
	}

	showPeople(event) {
		this.setState({openPeople: !this.state.openPeople});
	}

	render() {
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
	
};

export default IssuePeople;