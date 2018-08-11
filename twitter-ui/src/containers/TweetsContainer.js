import { connect } from 'react-redux';
import TweetList from '../components/TweetList';
import {retweet} from '../actions'

const mapStateToProps = state => ({tweets:state.tweets})
const mapDispatchToProps = dispatch => {
  return {
    handleRetweet: tweet => {
      console.log(tweet)
      dispatch(retweet(tweet))
    }
  }
}
const TweetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList)

export default  TweetsContainer
