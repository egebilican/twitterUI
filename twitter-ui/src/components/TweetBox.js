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

const TweetBox = ({ tweet }) => {
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
