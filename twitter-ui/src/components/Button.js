import React, { Component } from 'react';

const styles = {
  buttonStyle: {
    backgroundColor: '#ebebebeb',
    border: '1px solid #fdfdfd'
  }
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {foundTweets: []};

  }
 

  renderFoundTweets(tweet) {
    return <div>{tweet.text}</div>
  }

  render() {
    const { text } = this.props;
    return (
      <div style={styles.buttonStyle} onClick={event => this.props.handleClick()}>
        {text}
        {this.state.foundTweets.map(tweet => this.renderFoundTweets(tweet))}
      </div>
    );
  }
}

export default Button;
