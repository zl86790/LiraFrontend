import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as ass2medataReducer} from '../components/Dashboard/AssignedToMe/AssignedToMeReducer.js';
import {reducer as issueDetailDetailsReducer} from '../components/Issue/IssueDetailDetails/IssueDetailDetailsReducer.js';
import {reducer as issueCommentsReducer} from '../components/Issue/IssueComments/IssueCommentsReducer.js';
import {reducer as issueHistoryReducer} from '../components/Issue/IssueHistory/IssueHistoryReducer.js';
import {reducer as issueWatcherReducer} from '../components/Issue/IssueWatcher/IssueWatcherReducer.js';

import thunk from 'redux-thunk';

const allCombineReducer = combineReducers({
	ass2medata:ass2medataReducer,
	issuedata:issueDetailDetailsReducer,
	commentsdata:issueCommentsReducer,
	historiesdata:issueHistoryReducer,
	watchersdata:issueWatcherReducer
})

//store
const store = createStore(allCombineReducer,applyMiddleware(thunk));

export default store;