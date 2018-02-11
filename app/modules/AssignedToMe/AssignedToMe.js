import './AssignedToMe.css';

var AssignedToMe = React.createClass({
	render: function() {

		return (
			<div>
				<div className="asstm-nav-bg">
					<div className="asstm-nav">
				    	<h5 className="asstm-title">Assigned to me</h5>
				    </div>
				</div>
				<table className="asstm-issue-table">
					<thead className="asstm-issue-table-header">
				    	<tr>
				    		<td>Type</td>
				    		<td>Key</td>
				    		<td>Summary</td>
				    		<td>P</td>
				    	</tr>
				    </thead>
			    </table>
			</div>
		)
	}
	
});

export default AssignedToMe;