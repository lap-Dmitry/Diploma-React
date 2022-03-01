import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartReducer from '../reducers/cart';
import changeValueReducer from '../reducers/catalogSearch';
import categoriesReducer from '../reducers/categories';
import itemReducer from '../reducers/item';
import itemsListReducer from '../reducers/itemsList';
import orderFetchReducer from '../reducers/orderFetch';
import orderFormReducer from '../reducers/orderForm';
import topItemsListReducer from '../reducers/topItemsList';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cartReducer,
    changeValueReducer,
    categoriesReducer,
    itemReducer,
    itemsListReducer,
    orderFetchReducer,
    orderFormReducer,
    topItemsListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
