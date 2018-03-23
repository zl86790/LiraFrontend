
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDATA': 
    	 state = new Object();
    	 state._data = action.payload;
    	 return state;
    default: return state;
  }
};
