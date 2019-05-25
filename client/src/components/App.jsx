import React from 'react';
import Gallery from "./Gallery.jsx";
import Description from "./Description.jsx";
import styled from 'styled-components';

const Background = styled.div`
  background: #1b2838;
  color: #acb2b8;
  width: auto;
  margin: 0 2%;
`;

const Wrapper = styled.section`
    padding: 0px 0px 12px;
    margin: 0px 231.5px;
    width: 940px;
    height: 444px;
    font-family: Arial, Helvetica, sans-serif;
  `;


 const LeftCol = styled.div`
    float: left;
    width: 616px;
 `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: {
        name: null,
        description: null,
        head_url: null,
        release_date: null,
        developer: null,
        publisher: null,
        negative_review_count: null,
        positive_review_count: null,
        recent_negative_count: null,
        recent_positive_count: null
      },
      tags: ['Free to play', 'MOBA', 'Strategy', 'Multiplayer', 'PVP'],
      media: {
        vidoes: [],
        images: ['http://lorempixel.com/640/480']
      }
    }
  }

  componentDidMount() {
    fetch('/games/1')
    .then(response => response.json())
    .then(gameInfo => {
      this.setState({
        gameInfo
      }, () => console.log(this.state));
    });

    fetch('/screenshots') 
    .then(response => response.json())
    .then(screenshots => {
      var urls = [];
      screenshots.forEach(obj => {
        urls.push(obj['url']);
      });
      this.setState({
        media: {
          vidoes: [],
          images: urls
        }
      }, () => console.log(this.state));
    });
  }
  render() {
    return (
      <Background>
        <Wrapper>
          <LeftCol>
            <Gallery media={this.state.media}/>
          </LeftCol>
          <Description 
          gameInfo={this.state.gameInfo} 
          tags={this.state.tags}
          />
        </Wrapper>
      </Background>
    )
  }
  
}


export default App;