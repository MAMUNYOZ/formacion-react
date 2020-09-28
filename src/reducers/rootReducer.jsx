import { combineReducers } from 'redux';

import { uiReducer } from './uireducer';


export const roorTeducer = combineReducers({
    ui: uiReducer,
    auth: authReducer
})