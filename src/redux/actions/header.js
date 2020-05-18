import { GET_CATEGORIES_SUCCESS, } from './actiontypes';
import bridge from '../../utils/CommBridge/bridge';

export const getCategories = () => {
    // api cal to get categories goes here
    return dispatch => {

        bridge.instance.get("/categories")
            .then((response) => {
                dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
};
