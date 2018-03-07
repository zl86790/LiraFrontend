import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as ass2medataReducer} from '../components/AssignedToMe/AssignedToMeReducer.js';
import {reducer as issueDetailDetailsReducer} from '../components/IssueDetailDetails/IssueDetailDetailsReducer.js';
import thunk from 'redux-thunk';

const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer,
	issuedata:issueDetailDetailsReducer
})

//store
const store = createStore(allCombineReducer,applyMiddleware(thunk));

export default store;