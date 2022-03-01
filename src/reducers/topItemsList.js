import {
    FETCH_TOP_ITEMS_SUCCESS,
    FETCH_TOP_ITEMS_FAILURE,
    FETCH_TOP_ITEMS_REQUEST
} from '../actions/actionTypes';

const initialState = {
    items: null,
    loading: false,
    error: false,
};

export default function topItemsListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOP_ITEMS_SUCCESS: {
            const items = action.payload;
            return {
                ...state,
                loading: false,
                error: false,
                items
            }
        }
        case FETCH_TOP_ITEMS_FAILURE: {
            const message = action.payload;
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_TOP_ITEMS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state
    }
};
