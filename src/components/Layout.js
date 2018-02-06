import React from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions"
import {fetchTweets} from "../actions/tweetsActions"
import {bindActionCreators} from "redux";
import Tweets from "./Tweets";


const mapStateToProps = (store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({fetchUser, fetchTweets}, dispatch)}
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends React.Component {

    componentWillMount() {
        this.props.actions.fetchUser();
    }

    render() {
        const {user, tweets} = this.props;

        if (!tweets.data) {
            return <button onClick={() => this.props.actions.fetchTweets()}>load tweets</button>
        }

        return <div>
            <h1>{user.name}</h1>
            <Tweets tweets={tweets} />F
        </div>
    }
}
