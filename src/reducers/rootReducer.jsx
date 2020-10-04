import { combineReducers } from 'redux';

import { uiReducer } from './uireducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer
})