import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet, setHashtag } from '../actions';
import TextInput from './TextInput';
import TweetsContainer from './TweetsContainer';
import logo from '../logo.svg';
import Button from './Button';
import '../App.css';

class MainPage extends Component {
  handleClick() {
    let url = `http://188.166.35.26:3005/search/${this.props.hashtag}`;
    var request = new Request(url, {
      method: 'GET',
      mode: 'cors',
      // data: 'The sky is green',
      // redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });

    //TODO: bunu id bazli listeleyelim
    fetch(request)
      .then(response => {
        let res = response.json();        
        return res;
      })
      .then(tweet => this.props.addTweet(tweet));
  }

  handleOnChange(text) {
    this.props.setHashtag(text.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Çakma Twitter</h1>
        </header>
        <TextInput
          placeholder="Hashtag?"
          handleOnChange={this.handleOnChange.bind(this)}
        />
        <Button text="Tikla" handleClick={this.handleClick.bind(this)} />
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
