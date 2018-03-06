import {createStore, combineReducers} from 'redux';
import {reducer as ass2medataReducer} from '../components/AssignedToMe/AssignedToMeReducer.js';


const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer
})

//store
const store = createStore(allCombineReducer);

export default store;