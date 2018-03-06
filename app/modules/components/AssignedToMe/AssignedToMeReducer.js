import Global from '../Global/Global.js';

//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETASSIGNEDTOMEDATAACTION': 
    	var _this = this;
		$.ajax({
		    type: "GET", 
		    url: "http://localhost:8081/api/v1/postlogin/issues",
		    data: 'name=Lizhe', 
		    dataType: 'json',
		    contentType: 'application/json',
		    headers: {
		    	lira_token: Global.tokenObject.lira_token
		    },
		    success: function(ass2medata){ 
		    	alert(JSON.stringify(ass2medata));
		    	state=ass2medata;
		    },
			error: function(data){ 
		    	alert("load error");
		    	state=new Object();
		    }
		});
		
		return state;
    
    default: return state;
  }
};
