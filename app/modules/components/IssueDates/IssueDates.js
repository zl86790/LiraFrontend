/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueDates.css';

class IssueDates extends React.Component {
	getInitialState() {
        return {openIssueDates: true};
    }

	showIssueDates(event) {
		this.setState({openIssueDates: !this.state.openIssueDates});
	}

	render() {
		var openIssueDates = this.state.openIssueDates ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showIssueDates}>Dates&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openIssueDates}>
						<div style={{}}>
					  		<div>Created: 2018.2.19</div>
					  		<div>Updated: 2018.2.19</div>
					  		<div>Resolved: 2018.2.19</div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};

export default IssueDates;