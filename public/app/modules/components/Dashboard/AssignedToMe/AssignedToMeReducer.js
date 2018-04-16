
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDATA': 
    	 state = new Object();
    	 state._pageCount = action.payload._pageCount;
    	 state.pageNumber = action.payload.pageNumber;
    	 state._data = action.payload.data;
    	 console.log(state);
    	 return state;
    default: return state;
  }
};
