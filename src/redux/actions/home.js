import {
    GET_LANDING_PAGE_BLOGS_SUCCESS
} from './actiontypes';
import Bridge from '../../UI/ui/CommBridge/Bridge';



export const getlandingPageContent = () => {

    return dispatch => {

        Bridge.get("/landingPage")
            .then((response) => {
                
                dispatch({ type: GET_LANDING_PAGE_BLOGS_SUCCESS, payload: response.data });

            })
            .catch((error) => {
                alert("Service unavailable, loading dummy data")
                dispatch({type: GET_LANDING_PAGE_BLOGS_SUCCESS, payload: [{id:1,title:"dummy data", subTitle:"dummy data"},{id:1,title:"dummy data", subTitle:"dummy data"}]})
            })

    }

}
