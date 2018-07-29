import React, { Component } from 'react';

const styles = {
  buttonStyle: {
    backgroundColor: '#ebebebeb',
    border: '1px solid #fdfdfd'
  }
};

class Button extends Component {
  static defaultProps = {
    warning: false
  };

  constructor(props, defaultProps) {
    super(props, defaultProps);
    this.state = {foundTweets: []};
  }

  render() {
    const { text } = this.props;
    return (
      <div style={styles.buttonStyle} onClick={event => {if (!this.props.warning) {this.props.handleClick()}}}>
        {text}
      </div>
    );
  }
}

export default Button;
