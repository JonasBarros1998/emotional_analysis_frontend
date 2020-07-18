import { combineReducers } from 'redux';
import { homepage } from './app/__reducer__/homepage/homepage.reducer';

export const reducers = combineReducers({
    homepage: homepage
});