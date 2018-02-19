import './AssignedToMe.css';

import ReactTable from 'react-table';
import IssueDetail from '../IssueDetail/IssueDetail.js';
import IssueDetailLeftMenu from '../IssueDetailLeftMenu/IssueDetailLeftMenu.js';

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
				  	<ReactTable data={data} columns={columns} 
					  	getTdProps={(state, rowInfo, column, instance) => {
					  	    return {
					  	      onClick: (e, handleOriginal) => {
					  	        console.log('A Td Element was clicked!')
					  	        console.log('it produced this event:', e)
					  	        console.log('It was in this column:', column)
					  	        console.log('It was in this row:', rowInfo)
					  	        console.log('It was in this table instance:', instance)
					  	 
					  	        // IMPORTANT! React-Table uses onClick internally to trigger
					  	        // events like expanding SubComponents and pivots.
					  	        // By default a custom 'onClick' handler will override this functionality.
					  	        // If you want to fire the original onClick handler, call the
					  	        // 'handleOriginal' function.
					  	        if (handleOriginal) {
					  	          alert(rowInfo.original.key);
					  	          ReactDOM.render(
						    			<IssueDetail />,
						    			document.getElementById('dashboardCenterDiv')
						    	  );
					  	          ReactDOM.render(
						    			<IssueDetailLeftMenu />,
						    			document.getElementById('dashboardLeftMenuDiv')
						    	  );
					  	        
					  	        }
					  	      }
					  	    }
					  	  }}
				  	/>
				  </div>
		  );
		 
	}
	
});

export default AssignedToMe;