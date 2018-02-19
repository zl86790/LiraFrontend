import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import "./IssueDetailActionsTab.css";

var callback = function(key){
	 
}

var IssueDetailActionsTab = React.createClass({
	render: function() {

		return (
				
				<Tabs
			      defaultActiveKey="1"
			      onChange={callback}
			      renderTabBar={()=><ScrollableInkTabBar />}
			      renderTabContent={()=><TabContent />}
			    >
			      <TabPane tab='Comments' key="1">
			      	<hr/>1. Morckup comment 1 here 
			      	<hr/>2. Morckup comment 1 here 
			      	<hr/>3. Morckup comment 1 here 
			      	<hr/>4. Morckup comment 1 here 
			      	<hr/>5. Morckup comment 1 here 
			      	<hr/>6. Morckup comment 1 here 
			      	<hr/>7. Morckup comment 1 here 
			      </TabPane>
			      <TabPane tab='History' key="2">
			      	<hr/>1. Added details 
			      	<hr/>2. Added descriptions 
			      	<hr/>3. Added tab panels 
			      	<hr/>4. Update the page style 
			      	<hr/>1. Morckup comment 1 here 
			      	<hr/>2. Morckup comment 1 here 
			      	<hr/>3. Morckup comment 1 here 
			      	<hr/>4. Morckup comment 1 here 
			      	<hr/>5. Morckup comment 1 here 
			      	<hr/>6. Morckup comment 1 here 
			      	<hr/>7. Morckup comment 1 here 
			      </TabPane>
			      <TabPane tab='Watchers' key="3">
			      	<hr/>1. Lizhe
			      </TabPane>
			    </Tabs>
			
		)
	}
	
});

export default IssueDetailActionsTab;

