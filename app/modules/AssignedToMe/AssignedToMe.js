import './AssignedToMe.css';

import ReactTable from 'react-table';
import 'react-table/react-table.css'


var AssignedToMe = React.createClass({
	render() {
		  const data = [
			  {
			    type: 'Bug',
			    key: 'BUG-1',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-2',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-3',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-4',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-5',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-6',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-7',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-8',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-9',
			    summary: 'test summary',
			    priority: 'High'
			  },
			  {
			    type: 'Bug',
			    key: 'BUG-10',
			    summary: 'test summary',
			    priority: 'High'
			  }
		  ]
		 
		  const columns = [{
		    Header: 'Type',
		    accessor: 'type' // String-based value accessors!
		  }, {
		    Header: 'Key',
		    accessor: 'key'
		  }, {
		    Header: 'Summary',
		    accessor: 'summary'
		  }, {
			  Header: 'Priority',
			  accessor: 'priority'
		  }];
		  
		  return (
				  <div>
				  	<div className="asstm-table-title">Assigned to me</div>
				  	<ReactTable data={data} columns={columns} />
				  </div>
		  );
		 
	}
	
});

export default AssignedToMe;