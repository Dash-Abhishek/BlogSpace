import {GET_CATEGORIES_SUCCESS,} from './actiontypes';
import Bridge from '../../UI/ui/CommBridge/Bridge';


export const  getCategories = () => {
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