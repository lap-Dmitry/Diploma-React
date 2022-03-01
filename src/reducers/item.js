import {
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_REQUEST
} from '../actions/actionTypes';

const initialState = {
    item: null,
    error: false,
    loading: false,
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEM_SUCCESS:
            const item = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                item
            }
        case FETCH_ITEM_FAILURE:
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        case FETCH_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                disabled: false
            }
        default:
            return state

    };
}
