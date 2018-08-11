import React from 'react';
import TweetBox from './TweetBox';

const TweetList = ({ tweets, handleRetweet }) => {
  return (
  <div style={{ margin: '20px 100px 20px 100px' }}>
    {tweets.map((tweet, index) => <TweetBox key={index} tweet={tweet} handleClick={handleRetweet}/>)}
  </div>
)};

export default TweetList;