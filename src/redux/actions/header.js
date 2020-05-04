import { GET_CATEGORIES_SUCCESS, } from './actiontypes';
import Bridge from '../../UI/ui/CommBridge/Bridge';


export const getCategories = () => {
    // api cal to get categories goes here
    return dispatch => {

        Bridge.get("/categories")
            .then((response) => {
                dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
};
