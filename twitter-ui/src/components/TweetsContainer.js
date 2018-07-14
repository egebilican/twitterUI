import React, { Component } from 'react';
import { connect } from 'react-redux';


class TweetsContainer extends Component {
constructor(props) {
  super(props)
}
renderTweet(tweet) {
  console.log(tweet)
  return <div key={tweet.id}>{`${tweet.user} says:  ${tweet.text}`}</div>
}

render() {
  return (
    <div>
    {this.props.tweets.map(tweet => this.renderTweet(tweet))}
    </div>
  )
}
}

function mapStateToProps(state) {
   return { tweets: state.tweets };
}

export default connect(mapStateToProps, {})(TweetsContainer);
