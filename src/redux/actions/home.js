import {
    GET_CATEGORIES_SUCCESS,
    GET_TRENDING_BLOGS_SUCCESS
} from './actiontypes';

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
    // api call to get trending blogs
    return {
        type: GET_TRENDING_BLOGS_SUCCESS,
        payload: [{
            id: 1,
            title: 'Blog 1',
            subTitle: 'subtitle'
        }, {
            id: 2,
            title: 'Blog 2',
            subTitle: 'subtitle'
        }, {
            id: 3,
            title: 'Blog 3',
            subTitle: 'subtitle'
        }, {
            id: 4,
            title: 'Blog 4',
            subTitle: 'subtitle'
        }, {
            id: 5,
            title: 'Blog 5',
            subTitle: 'subtitle'
        }, {
            id: 6,
            title: 'Blog 6',
            subTitle: 'subtitle'
        }]
    };
}
