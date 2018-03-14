import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as ass2medataReducer} from '../components/AssignedToMe/AssignedToMeReducer.js';
import {reducer as issueDetailDetailsReducer} from '../components/IssueDetailDetails/IssueDetailDetailsReducer.js';
import {reducer as issueDetailActionsReducer} from '../components/IssueDetailActionsTab/IssueDetailActionsTabReducer.js';
													
import thunk from 'redux-thunk';

const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer,
	issuedata:issueDetailDetailsReducer,
	commentsdata:issueDetailActionsReducer
})

//store
const store = createStore(allCombineReducer,applyMiddleware(thunk));

export default store;