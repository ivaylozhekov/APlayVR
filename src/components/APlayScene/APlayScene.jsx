import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene,} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux'
import '../aframe/test'
class APlayScene extends React.PureComponent {
  render() {
    const {sceneEntities} = this.props;
    return (
      <Scene background="color: grey">
        <a-assets>
          <audio id="ping" src="http://localhost:3000/sounds/ping_pong.mp3" preload="auto"></audio>
        </a-assets>
        <Entity
          id="camera"
          camera
          position="0 0 5"
          orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.25; rotateSpeed:0.14; minDistance:3; maxDistance:15;"
          mouse-cursor=""
        />
        <a-asset>
        <video id="video" controls="controls"
          class="video-stream"
          x-webkit-airplay="allow"
          data-youtube-id="N9oxmRT2YWw"
          src="http://localhost:3000/videos/8084.mkv">
        </video>
        </a-asset>
        <a-video src="#video" width="16" height="9" position="0 1 -20" autoplay></a-video>
        <Entity id="target" />
        <Entity test={{x: 0, y: 1, z: 2}} />
        <a-entity position="0 0 11" gltf-model="http://localhost:3000/models/football_adidas_used/scene.gltf"></a-entity>
        <Entity primitive="a-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2000px-Adidas_Logo.svg.png" />
        {sceneEntities.map(entity => entity)}
        <Entity particle-system={{preset: 'snow'}} />
        <Entity light={{type: 'point'}} />
        <Entity light={{type: 'spot'}} />
      </Scene>
    );
  }
}

const mapStateToProps = state => {
  return {
    sceneEntities: state.sceneEntities
  }
}

export default connect(
  mapStateToProps
)(APlayScene);
