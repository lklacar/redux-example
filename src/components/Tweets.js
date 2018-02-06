import React from "react";

const Tweets = ({tweets}) => <ul>{tweets.data.map(tweet => <li key={tweet.id}>{tweet.text}</li>)}</ul>;

export default Tweets;