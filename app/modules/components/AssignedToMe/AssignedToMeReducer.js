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
    	 state._data = data
    	 return state;
    default: return state;
  }
};
