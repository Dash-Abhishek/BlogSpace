import {
    GET_CATEGORIES_SUCCESS,
    GET_TRENDING_BLOGS_SUCCESS
} from '../actions/actiontypes';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };
        case GET_TRENDING_BLOGS_SUCCESS:
            return {
                ...state,
                trendingBlogs: action.payload
            };
        default:
            return { ...state };
    }
}
