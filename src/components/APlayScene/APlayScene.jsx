import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene,} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import LeapMotion from '../LeapMotion';
import '../aframe/test'
class APlayScene extends React.PureComponent {
  render() {
    const {sceneEntities} = this.props;
    return (
      <Scene background="color: black">
        <a-assets>
          <audio id="ping" src="http://localhost:3000/sounds/ping_pong.mp3" preload="auto"></audio>
        </a-assets>
        <Entity
          id="camera"
          camera
          position="0 5 5"
          orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.25; rotateSpeed:0.14; minDistance:3; maxDistance:15;"
          mouse-cursor=""
        />
        <a-asset>
          <video id="video1" autoplay="true"
            src="http://localhost:3000/videos/8084.mkv">
          </video>
        </a-asset>
        <a-video src="#video1" width="160" height="90" position="0 45 -100"></a-video>

        <a-asset>
          <video id="video2" autoplay="true"
            src="http://localhost:3000/videos/8090.mp4">
          </video>
        </a-asset>
        <a-video src="#video2" width="160" height="90" position="-120 45 -40" rotation="0 90 0"></a-video>

        <a-asset>
          <video id="video3" autoplay="true"
            src="http://localhost:3000/videos/8088.mkv">
          </video>
        </a-asset>
        <a-video src="#video3" width="160" height="90" position="120 45 -40" rotation="0 -90 0"></a-video>
        <Entity id="target" test={{x: 0, y: 5, z: 5}}  />
        <Entity test={{x: 0, y: 5, z: 5}} />


        <a-entity position="0 0.5 -14">
          <a-entity position="0 0.5 15.3" gltf-model="http://localhost:3000/models/football_adidas_used/scene.gltf">
          </a-entity>
          <a-animation attribute="rotation"
             dur="10000"
             fill="forwards"
             to="0 360 0"
             repeat="indefinite"></a-animation>
        </a-entity>
        <a-entity>
          <a-entity position={{x: 3, y: 1, z: -17}} primitive="a-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2000px-Adidas_Logo.svg.png" >

          </a-entity>
          <a-animation attribute="rotation"
             dur="10000"
             fill="forwards"
             to="0 360 0"
             repeat="indefinite"></a-animation>
        </a-entity>
        {sceneEntities.map(entity => entity)}
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}} position={{x: 0, y: 15, z: 0}}/>
        <Entity light={{type: 'spot'}} position={{x: 3, y: 1, z: -13}} rotation={{x: -60, y: 40, z: 0}}/>
        <Entity light={{type: 'spot'}} position={{x: -5, y: 1, z: -10}} rotation={{x: -60, y: -30, z: 0}}/>
        <LeapMotion />
        <a-plane color="green" height="400" width="400" rotation="-90 0 0" position="0 0 0"></a-plane>
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
