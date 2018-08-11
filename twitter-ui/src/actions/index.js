export const ADD_NEW_TWEET = "ADD_NEW_TWEET";
export const SET_HASHTAG = "SET_HASHTAG";
export const RETWEET = "RETWEET";
const http = require("http");



export function addTweet(tweet) {
  console.log(tweet)
  return {
    type: ADD_NEW_TWEET,
    payload: tweet
  };
}

export function setHashtag(text) {
  return {
    type: SET_HASHTAG,
    payload: text
  }
}

//TODO: post mu olmali?
export function retweet(tweet) {
  console.log('retweeting', tweet)
  let url = `http://188.166.35.26/retweet/${tweet}`;
  http.get(url)
  return {
    type: RETWEET,
    payload: tweet
  }
}