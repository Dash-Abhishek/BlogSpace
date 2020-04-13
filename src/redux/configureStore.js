import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import home from './reducers/home';

export default () => {
    const reducer = combineReducers({
        home
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        home: {
            categories: [],
            trendingBlogs: []
        }
    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
