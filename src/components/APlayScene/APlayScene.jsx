import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import LeapMotion from '../LeapMotion';
import '../aframe/test'
class APlayScene extends React.PureComponent {
  render() {
    const { sceneEntities } = this.props;
    return (
      <Scene background="color: grey">
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

        <a-entity position="0 0 11">
          <a-entity gltf-model="http://localhost:3000/models/football_adidas_used/scene.gltf">
          </a-entity>
          <a-animation attribute="rotation"
             dur="10000"
             fill="forwards"
             to="0 360 0"
             repeat="indefinite"></a-animation>
        </a-entity>
        <a-entity>
          <a-entity primitive="a-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2000px-Adidas_Logo.svg.png" >

          </a-entity>
          <a-animation attribute="rotation"
             dur="10000"
             fill="forwards"
             to="0 360 0"
             repeat="indefinite"></a-animation>
        </a-entity>
        {sceneEntities.map(entity => (
          <Entity geometry={{primitive: entity.primitiveType}} material={{color: entity.color}} position={entity.position}/>
        ))}
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity light={{type: 'spot'}}/>
        <LeapMotion />
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
