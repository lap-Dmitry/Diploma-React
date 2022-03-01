import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    SET_ACTIVE_CATEGORY
} from '../actions/actionTypes';

const initialState = {
    categories: null,
    loadingCategories: false,
    errorCategories: false,
    activeCategory: 11
};

export default function categories(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS: {
            const categories = action.payload;
            return {
                ...state,
                loadingCategories: false,
                errorCategories: false,
                categories
            }
        }
        case FETCH_CATEGORIES_FAILURE: {
            return {
                ...state,
                loadingCategories: false,
                errorCategories: true
            }
        }
        case FETCH_CATEGORIES_REQUEST: {
            return {
                ...state,
                loadingCategories: true
            }
        }
        case SET_ACTIVE_CATEGORY: {
            const id = action.payload;
            return {
                ...state,
                activeCategory: id
            }
        }
        default:
            return state
    }
};
