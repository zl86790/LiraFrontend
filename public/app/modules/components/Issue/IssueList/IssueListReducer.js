
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  
  switch (action.type) {
    case 'GETISSUELISTDATA': 
    	 state = new Object();
    	 state.issueCounts = action.payload.issueCounts;
    	 state.pageNumber = action.payload.pageNumber;
    	 state._data = action.payload.data;
    	 console.log(state);
    	 return state;
    default: return state;
  }
};
