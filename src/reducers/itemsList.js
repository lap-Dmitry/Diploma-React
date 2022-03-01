import {
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_REQUEST,
    FETCH_MORE_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_FAILURE,
    FETCH_MORE_ITEMS_REQUEST,
    SET_DISABLE
} from '../actions/actionTypes';

const initialState = {
    items: null,
    loading: false,
    loadingMoreItems: false,
    error: false,
    errorMoreItems: false,
    disable: false

};

export default function itemsListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS: {
            const items = action.payload;
            return {
                ...state,
                loading: false,
                error: false,
                items
            }
        }
        case FETCH_ITEMS_FAILURE: {
            const message = action.payload;
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_ITEMS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case FETCH_MORE_ITEMS_SUCCESS: {
            const newItems = action.payload;
            return {
                ...state,
                loadingMoreItems: false,
                errorMoreItems: false,
                items: [...state.items, ...newItems]
            }
        }
        case FETCH_MORE_ITEMS_FAILURE: {
            const message = action.payload;
            return {
                ...state,
                loadingMoreItems: false,
                errorMoreItems: message

            }
        }
        case FETCH_MORE_ITEMS_REQUEST: {
            return {
                ...state,
                loadingMoreItems: true
            }
        }
        case SET_DISABLE: {
            return {
                ...state,
                disable: true
            }
        }
        default:
            return state
    }
};
