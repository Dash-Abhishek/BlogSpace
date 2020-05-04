import {
    GET_LANDING_PAGE_BLOGS_SUCCESS
} from '../actions/actiontypes';

export default (state = {}, action) => {
    switch(action.type) {
        
        case GET_LANDING_PAGE_BLOGS_SUCCESS:
            return {
                ...state,
                landingPageContent: action.payload
            };
        default:
            return { ...state };
    }
}
