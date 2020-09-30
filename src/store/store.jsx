import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { productsReducer } from "../reducers/productsReducer";
import { shoppingReducer } from "../reducers/shoppingReducer";
import { favoritesReducer } from "../reducers/favoritesReducer";

import thunk from 'redux-thunk';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  products: productsReducer,
  shopping: shoppingReducer,
  favorites: favoritesReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);
