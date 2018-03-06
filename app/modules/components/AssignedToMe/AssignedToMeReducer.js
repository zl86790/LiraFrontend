
import Global from '../Global/Global.js';
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDATA': 
    	 const data = [{
    		type: 'Bug',
		    key: 'BUG-1',
		    summary: 'test summary',
		    priority: 'High'
 		  }]
    	 
 		
 		 let url = 'http://localhost:8081/api/v1/postlogin/issues';
    	 axios.get(url, {
		    params: {
		      
		    },
		    headers: {
		      "lira_token": Global.tokenObject.lira_token
		    }
		  })
		  .then(function (ass2medata) {
			alert(JSON.stringify(ass2medata));
	    	state._data = ass2medata;
	    	return state;
		  }).catch(function (error) {
			alert("load error");
		  });
 		
    	 
//    	 state._data = data
//    	 alert(JSON.stringify(state._data));
//    	 return state;
    default: return state;
  }
};
