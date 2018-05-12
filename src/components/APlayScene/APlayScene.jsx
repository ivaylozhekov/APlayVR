// import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import LeapMotion from '../LeapMotion';
import '../aframe/test';
import { changeDefaultVideo } from './actions.js';

class APlayScene extends React.PureComponent {
  render() {
    const { sceneEntities, defaultVideo } = this.props;
    return (
      <Scene background="color: black">
        <Entity
          id="camera"
          camera
          orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.25; rotateSpeed:0.14; minDistance:3; maxDistance:15;"
          mouse-cursor=""
        />
        {/*The main video*/}
        <a-asset>
          <video id="video1" autoplay="true"
            src={`http://localhost:3000/videos/${defaultVideo}`}>
          </video>
        </a-asset>

        <a-video src="#video1" width="160" height="90" position="0 45 -100"></a-video>
        
        <Entity position={{x: 120, y: 0, z: -40}} rotation={{x: 0, y: -90, z: 0}}>
          <a-plane color="black" height="160" width="400" position="0 45 -2"></a-plane>
          <Entity
            material={{color: 'white'}}
            scale={{x: 20, y: 20, z: 20}}
            position={{x: 40, y: 60, z: 0}}
            primitive="a-image"
            src="http://localhost:3000/img/adidas.png"
          />
          <a-asset>
            <video id="video2" autoplay="true"
              src="http://localhost:3000/videos/8090.mp4">
            </video>
          </a-asset>
          <a-video src="#video2" width={160/2} height={90/2} position="100 45 0"></a-video>
          <a-asset>
            <video id="video3" autoplay="true"
              src="http://localhost:3000/videos/8088.mkv">
            </video>
          </a-asset>
          <a-video src="#video3" width={160/2} height={90/2} position="-20 45 0" ></a-video>
          <a-entity position="40 0 90">
            <a-entity>
            <a-entity position="0 5.5 15.3" gltf-model="http://localhost:3000/models/football_adidas_used/scene.gltf">
            </a-entity>
            <a-animation attribute="rotation"
              dur="10000"
              fill="forwards"
              to="0 360 0"
              repeat="indefinite"></a-animation>
              </a-entity>
              <Entity geometry={{primitive: 'box', width: 5, height: 5, depth: 5}} material={{color: 'white'}} position={{x: 0, y: 2.5, z: 0}}/>
              <Entity light={{type: 'spot', intensity: 0.1}} position={{x: 3, y: 8, z: 2}} rotation={{x: -60, y: 40, z: 0}}/>
              <Entity light={{type: 'spot', intensity: 0.1}} position={{x: -5, y: 8, z: 5}} rotation={{x: -60, y: -30, z: 0}}/>
          </a-entity>
        </Entity>


        <Entity id="target" test={{x: 0, y: 3, z: -10}}  />
        <Entity test={{x: 0, y: 5, z: 5}} />
        {sceneEntities.map(entity => (
          <Entity geometry={{primitive: entity.primitiveType}} material={{color: entity.color}} position={entity.position}/>
        ))}
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}} position={{x: 0, y: 15, z: 0}}/>
        <LeapMotion />
        <a-plane color="green" height="400" width="400" rotation="-90 0 0" position="0 0 0"></a-plane>
      </Scene>
    );
  }
}
const mapStateToProps = state => {
  return {
    sceneEntities: state.mainScene.sceneEntities,
    defaultVideo: state.mainScene.videoName,
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeDefaultVideo(videoName) {
    dispatch(changeDefaultVideo(videoName))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APlayScene);
