
import Global from '../Global/Global.js';
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDATA': 
    	 state = new Object();
    	 state._data = action.payload;
    	 alert(":::::::::::::"+JSON.stringify(state._data));
    	 return state;
    default: return state;
  }
};
