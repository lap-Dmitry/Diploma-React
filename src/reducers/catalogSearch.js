import { CHANGE_VALUE, OPEN_SEARCH, START_SEARCH, CLOSE_SEARCH } from "../actions/actionTypes";

const initialState = {
    value: '',
    isSearchOpen: false,
    search: '',
};

export default function changeValueReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            const value = action.payload;
            console.log(value);
            return {
                ...state,
                value
            }
        case OPEN_SEARCH:
            return {
                ...state,
                isSearchOpen: true
            }
        case START_SEARCH:
            const { search } = action.payload;
            return {
                ...state,
                search
            }
        case CLOSE_SEARCH:
            return {
                ...state,
                isSearchOpen: false
            }
        default:
            return state;
    }
};
