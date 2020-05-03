import {
    GET_TRENDING_BLOGS_SUCCESS
} from '../actions/actiontypes';

export default (state = {}, action) => {
    switch(action.type) {
        
        case GET_TRENDING_BLOGS_SUCCESS:
            return {
                ...state,
                trendingBlogs: action.payload
            };
        default:
            return { ...state };
    }
}
