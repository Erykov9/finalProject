import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import product from './productsRedux';
import order from  './orderRedux';


const rootReducer = combineReducers({
  product,
  order
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;