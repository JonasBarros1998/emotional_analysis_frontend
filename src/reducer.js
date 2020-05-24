import { combineReducers } from 'redux';
import { homepage } from './app/_reducer/homepage/homepage.reducer';

export const reducers = combineReducers({
    homepage: homepage
});