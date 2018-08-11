import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet, setHashtag } from '../actions';
import TextInput from './TextInput';
import TweetsContainer from './TweetsContainer';
import logo from '../logo.svg';
import theme from '../themes';
import { ThemeProvider, injectGlobal } from 'styled-components';
import '../App.css';

const styles = {
  searchStyle :{
    display: 'flex',
    flexDirection : 'row',
    justifyContent: 'center',
    marginTop: '20px'  
  }
}

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Çakma Twitter</h1>
        </header>
        <div style={styles.searchStyle}>
        <TextInput
        />
        </div>
        <TweetsContainer />
      </div>
      </ThemeProvider>
    );
  }
}


function mapStateToProps(state) {
  return { hashtag: state.hashtag };
}

export default connect(
  mapStateToProps,
  { addTweet, setHashtag }
)(MainPage);