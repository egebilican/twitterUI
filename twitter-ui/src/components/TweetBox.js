import React from 'react';

const styles = {
  boxContainerStyle: {
    border: '1px solid #ebebeb',
    borderRadius: '10px',
    padding:'10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  userStyle: {
    flex: 0,
    color: 'grey'
  },
  textStyle: {
    flex: 1,
    fontSize: '1.2em'
  }
};

<<<<<<< HEAD
const TweetBox = ({ tweet }) => {
=======
const TweetBox =  tweet => {
  console.log(tweet);
>>>>>>> 6212532148f4f81cfb641693cafc006857ae9b43
  if (tweet) {
    return (
      <div style={styles.boxContainerStyle} key={tweet.id}>
        <span style={styles.userStyle}>{`User: ${tweet.user}`}</span>
        <span style={styles.textStyle}>{`${tweet.text}`}</span>
      </div>
    );
  } else {
    return (<div>aasaasdsa</div>)
  }
};

export default TweetBox;
