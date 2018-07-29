import React from 'react';
import { connect } from 'react-redux';
import TweetList from '../components/TweetBox';

const asd = 'ege';


//TODO:bozuk:D
const mapStateToProps = state => {
  return {
    state
  }}​

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
​
const TweetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList)
​
export default TweetsContainer
