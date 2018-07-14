import React, { Component } from 'react';

const styles = {
  containerStyle: {
    backgroundColor: '#ebebebeb',
    border: '1px solid #fdfdfd',
    flexDirection: 'row'
  }
};

class TextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {placeholder} = this.props;

    return (
    <div style={styles.containerStyle}>
      <input placeholder={placeholder} onChange={event => this.props.handleOnChange(event)}/>
    </div>
    )
  }
}

export default TextInput;