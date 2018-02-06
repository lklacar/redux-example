import {handleActions} from "redux-actions";

export default handleActions({

    FETCH_TWEETS: (state, action) => ({...state, fetching: true}),

    FETCH_TWEETS_REJECTED: (state, action) => ({...state, fetching: false, error: action.payload}),

    FETCH_TWEETS_FULFILLED: (state, action) => ({
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload,
    }),

    ADD_TWEET: (state, action) => ({
        ...state,
        tweets: [...state.tweets, action.payload],
    }),

    UPDATE_TWEET: (state, action) => {

        const {id} = action.payload;
        const newTweets = [...state.tweets];
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
        newTweets[tweetToUpdate] = action.payload;

        return {
            ...state,
            tweets: newTweets,
        }
    },

    DELETE_TWEET: (state, action) => ({
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
    }),

}, {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
})