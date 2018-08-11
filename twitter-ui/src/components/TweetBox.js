import React, { Component } from 'react';

const styles = {
  boxContainerStyle: {
    border: '1px solid #ebebeb',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  boxContainerStyleHovered: {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: '#ebebeb'
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

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  render() {
    const { tweet, handleClick } = this.props;
    if (tweet) {
      return (
        <div
          style={
            this.state.hovered
              ? styles.boxContainerStyleHovered
              : styles.boxContainerStyle
          }
          key={tweet.id}
          onMouseOver={() => {
            this.setState({ hovered: true });
          }}
          onMouseOut={() => {
            this.setState({ hovered: false });
          }}
        >
          <span style={styles.userStyle}>{`User: ${tweet.user}`}</span>
          <span style={styles.textStyle}>{`${tweet.text}`}</span>
          <span
            style={{
              display: this.state.hovered ? 'flex' : 'none',
              color: 'red'
            }}
            onClick={() => handleClick(tweet.id)}
          >
            Retweet
          </span>
        </div>
      );
    } else {
      return <div>Bi sorun var datada sanirim</div>;
    }
  }
}

export default TweetBox;
