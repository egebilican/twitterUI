export const ADD_NEW_TWEET = "ADD_NEW_TWEET";
export const SET_HASHTAG = "SET_HASHTAG";


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