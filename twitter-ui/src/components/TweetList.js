import React from 'react';
import TweetBox from './TweetBox';

const TweetList = ({ tweets }) => {
  return (
  <div style={{ margin: '0 100px 0 100px' }}>
    {tweets.map((tweet, index) => <TweetBox key={index} tweet={tweet} />)}
  </div>
)};

export default TweetList;