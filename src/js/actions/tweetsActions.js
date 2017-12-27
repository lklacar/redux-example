import axios from "axios";

export function fetchTweets() {
    return {type: "FETCH_TWEETS", payload: axios.get("http://rest.learncode.academy/api/reacttest/tweets")}
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweet(id) {
    return {type: 'DELETE_TWEET', payload: id}
}
