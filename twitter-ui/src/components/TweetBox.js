import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid
    ${props => {
      if (props.hovered) {
        return 'black';
      }
      return '#ebebeb';
    }};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: ${props => props.hovered ? '#ebebeb' : 'none'};
`;

const TextItem = styled.span`
    flex: 0;
    color: grey;
`
const TweetText = TextItem.extend`
    flex:1;
    fontSize: 1.2em;
    color: black;
`

const Retweet = TextItem.extend`
    display: ${props => props.hovered ? "block" : "none"};
    color: red;
    align-self: center;
    cursor: pointer;
`

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  render() {
    const { tweet, handleClick } = this.props;
    if (tweet) {
      return (
        <Box
          key={tweet.id}
          onMouseOver={() => {
            this.setState({ hovered: true });
          }}
          onMouseOut={() => {
            this.setState({ hovered: false });
          }}
          hovered={this.state.hovered}
        >
          <TextItem>{`User: ${tweet.user} Tweet Id: ${tweet.id}`}</TextItem>
          <TweetText>{`${tweet.text}`}</TweetText>
          <Retweet hovered={this.state.hovered} onClick={() => handleClick(tweet.id)}>Retweet</Retweet>
        </Box>
      )
    } else {
      return <div>Bi sorun var datada sanirim</div>;
    }
  }
}

export default TweetBox;
