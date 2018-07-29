import React from 'react';
import TweetBox from './TweetBox';

const TweetList = ({ tweets }) => {
  console.log('containerdeki tweetler: ', tweets)
  return (
  <div style={{ margin: '0 100px 0 100px' }}>
    {tweets.map((tweet, index) => <TweetBox key={index} {...tweet} />)}
  </div>
)};

export default TweetList;