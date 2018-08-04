import { combineReducers } from 'redux';
import { repoReducer } from './reducers/reducer.repo';
import { homeReducer } from './reducers/reducer.home';

export const rootReducers = combineReducers({
    repoReducer,
    homeReducer
});