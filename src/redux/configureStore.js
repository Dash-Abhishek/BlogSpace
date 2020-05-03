import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import home from './reducers/home';
import header from './reducers/header';

export default () => {
    const reducer = combineReducers({
        home, header
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        home: {
            trendingBlogs: []
        },
        header: {
            categories: []
        }

    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
