import React from 'react';
import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps= state => {
  return {tweets: state.tweets}
}

export default connect(
  mapStateToProps
)(TweetList)