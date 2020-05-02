import {
    GET_CATEGORIES_SUCCESS,
    GET_TRENDING_BLOGS_SUCCESS
} from './actiontypes';
import Bridge from '../../UI/ui/CommBridge/Bridge';

export const getCategories = () => {
    // api cal to get categories goes here
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: [
            'Moto',
            'Tech',
            'Livestyle',
            'Social',
            'Legal'
        ]
    };
}

export const getTrendingBlogs = () => {

    return dispatch => {

        Bridge.get("/blogs")
            .then((response) => {
                
                dispatch({ type: GET_TRENDING_BLOGS_SUCCESS, payload: response.data.blogs });

            })
            .catch((error) => {
                alert("Service unavailable, loading dummy data")
                dispatch({type: GET_TRENDING_BLOGS_SUCCESS, payload: [{id:1,title:"dummy data", subTitle:"dummy data"},{id:1,title:"dummy data", subTitle:"dummy data"}]})
            })

    }

}
