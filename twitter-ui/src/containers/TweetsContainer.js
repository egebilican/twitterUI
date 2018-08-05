import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

<<<<<<< HEAD
const mapStateToProps = state => ({tweets:state.tweets})
const TweetsContainer = connect(
  mapStateToProps,
  null
)(TweetList)

export default  TweetsContainer
=======
const mapStateToProps= state => {
  return {tweets: state.tweets}
}

export default connect(
  mapStateToProps
)(TweetList)
>>>>>>> 6212532148f4f81cfb641693cafc006857ae9b43
