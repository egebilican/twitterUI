import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet, setHashtag } from '../actions';
import TextInput from '../containers/TextInput';
import TweetsContainer from '../containers/TweetsContainer';
import logo from '../logo.svg';
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