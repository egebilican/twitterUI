import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = state => ({tweets:state.tweets})
const TweetsContainer = connect(
  mapStateToProps,
  null
)(TweetList)

export default  TweetsContainer