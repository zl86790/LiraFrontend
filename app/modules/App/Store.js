import {createStore, combineReducers} from 'redux';
import {reducer as ass2medataReducer} from './ass2medataReducer.js';


const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer
})

//store
const store = createStore(allCombineReducer);

export default store;