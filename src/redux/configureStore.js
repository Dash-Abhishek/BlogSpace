import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import home from './reducers/home';
import header from './reducers/header';
import auth from './reducers/auth';

export default () => {
    const reducer = combineReducers({
        home, header, auth
    });
    const middlewares = [thunk];
    middlewares.push(createLogger);
    const initialState = {
        home: {
            landingPageContent:{
                promotionalBlog:{},
                trendingBlogs:[],
                topViewedBlog:{}
            }
        },
        header: {
            categories: []
        },
        auth: {
            loading: false,
            isLoggedIn: false,
            userData: {},
            errorMessage: null,
            registerError: null,
            authenticationFailed: false
        }

    };
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
};
