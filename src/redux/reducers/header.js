import {GET_CATEGORIES_SUCCESS} from '../actions/actiontypes'

export default (state = {}, action)=>{

    switch(action.type){

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return { ...state };

    }
}