import {handleActions} from "redux-actions";

export default handleActions({

        FETCH_USER: (state, action) => ({...state, fetching: true}),

        FETCH_USER_REJECTED: (state, action) => ({...state, fetching: false, error: action.payload}),

        FETCH_USER_FULFILLED: (state, action) => ({
            ...state,
            fetching: false,
            fetched: true,
            user: action.payload,
        }),

        SET_USER_NAME: (state, action) => ({
            ...state,
            user: {...state.user, name: action.payload},
        }),

        SET_USER_AGE: (state, action) => ({
                ...state,
                user: {...state.user, age: action.payload},
            }
        ),

    }, {
        user: {
            id: null,
            name: null,
            age: null,
        },
        fetching: false,
        fetched: false,
        error: null,
    }
);
