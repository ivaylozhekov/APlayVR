// import 'aframe';
import 'aframe-orbit-controls-component-2';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import LeapMotion from '../LeapMotion';
import '../aframe/test';
import {changeDefaultVideo, requestProducts} from './actions.js';

require('../LeapMotion/leap-hands');
require('aframe-effects');

const mainVideo = {
  width: 160,
  height: 90
};

const groundZero = 0;

class APlayScene extends React.Component {
  componentWillMount() {
    this.props.onRequestProducts();
  };

  componentDidMount() {
    // Animate color.
    const animatedText = [
      document.getElementById("goal-announce1"),
      document.getElementById("goal-announce2"),
    ];
    const objsize = {scale: 60};

    animatedText.forEach(el => {
      const tween = new AFRAME.TWEEN.Tween(objsize)
        .to({scale: 20}, 500)
        .repeat(Infinity)
        .yoyo(true)
        .onUpdate(function () {
          el.setAttribute('text', 'wrapCount', objsize.scale);
        })
        .start();
    });
  }

  getEventDescription = ({player, nationalTeam, time}) => {
    return `${player.lastName} ${player.firstName} (${player.startNumber}) of ${nationalTeam.name} scored!`
  };

  render() {
    const {event, sceneEntities, defaultVideo, products} = this.props;

    const showEvent = event && event.description;

    const text = showEvent ? this.getEventDescription(event) : "";

    return (
      <Scene
        background="color: black"
        //effects={showEvent ? "godrays" : ""}
        //godrays="src: #sun; threshold: 0. 0.33; intensity: 2"
      >
        <a-assets>
          <audio id="goal" src="http://localhost:3000/sounds/goal.mp3" preload="true"></audio>
          <video id="match1" src="http://localhost:3000/videos/8090.mp4" preload="auto"></video>
          <video id="video1" autoPlay={false} src={`http://localhost:3000/videos/${defaultVideo}`}></video>
        </a-assets>

        <Entity
          id="camera"
          camera
          orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.25; rotateSpeed:0.14; minDistance:3; maxDistance:15;"
          mouse-cursor=""
        >
          <a-entity position="0 -1 -30" leap-hands />
          <a-entity sound="src: #goal" id="goal-sound" />
        </Entity>

        <a-entity position="0 -10 0">
          {/*The main video*/}
          <a-video src="#video1" width={mainVideo.width} height={mainVideo.height} position="0 45 -100"></a-video>

          <a-entity visible={showEvent ? "true" : "false"}>
            <a-text
              id="goal-description"
              value={text}
              position="20 1 -99"
              width="120"
              anchor="center"
              baseline="bottom"
            />
            <a-text
              id="goal-announce1"
              value="!!! Goal !!!"
              position="75 80 -99"
              width="160"
              align="right"
              color="cyan"
            />
            <a-text
              id="goal-announce2"
              value="!!! Goal !!!"
              position="-75 80 -99"
              width="160"
              color="cyan"
            />

            {/*<a-entity id="sun" geometry="primitive: sphere; radius: 10;" material="shader: flat; transparent: true; color: #ffffff" light="type: directional; color: #FFF; intensity: 0.6"
            position="0 45 -100"
            visible="false"
          />*/}

            <a-entity position="0 2 -13">
              <a-entity>
                <a-entity position="0 5.5 15.3" gltf-model="http://localhost:3000/models/football_adidas_used/scene.gltf">
                </a-entity>
                <a-animation attribute="rotation"
                  dur="10000"
                  fill="forwards"
                  to="0 360 0"
                  repeat="indefinite"></a-animation>
              </a-entity>
              <Entity geometry={{
                primitive: 'box',
                width: 5,
                height: 5,
                depth: 5
              }} material={{color: 'white'}} position={{x: 0, y: 2.5, z: 0}} />
              <Entity light={{type: 'spot', intensity: 0.1}} position={{
                x: 3,
                y: 8,
                z: 2
              }} rotation={{x: -60, y: 40, z: 0}} />
              <Entity light={{type: 'spot', intensity: 0.1}} position={{
                x: -5,
                y: 8,
                z: 5
              }} rotation={{x: -60, y: -30, z: 0}} />
            </a-entity>
          </a-entity>

          <Entity position={{x: 120, y: 0, z: -40}} rotation={{x: 0, y: -90, z: 0}}>
            <a-plane color="black" height="160" width="400" position="0 45 -2"></a-plane>
            <Entity
              material={{color: 'white'}}
              scale={{x: 20, y: 20, z: 20}}
              position={{x: 40, y: 60, z: 0}}
              primitive="a-image"
              src="http://localhost:3000/img/adidas.png"
            />
            <a-video src="#match1" width={mainVideo.width / 2} height={mainVideo.height / 2} position="100 45 0"></a-video>
            <a-video src="#match1" width={mainVideo.width / 2} height={mainVideo.height / 2} position="-20 45 0"></a-video>
          </Entity>


          <Entity id="target" test={{x: 0, y: 3, z: -10}} />
          <Entity test={{x: 0, y: 5, z: 5}} />
          {sceneEntities.map(entity => entity)}
          <Entity particle-system={{preset: 'snow'}} />
          <Entity light={{type: 'point'}} position={{x: 0, y: 15, z: 0}} />
          <LeapMotion />
          <a-plane color="green" height="400" width="400" rotation="-90 0 0" position={`0 ${groundZero} 0`}></a-plane>
        </a-entity>
      </Scene>
    );
  }
}

const mapStateToProps = state => {
  return {
    sceneEntities: state.mainScene.sceneEntities,
    defaultVideo: state.mainScene.videoName,
    products: state.mainScene.products,
    event: state.event
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeDefaultVideo(videoName) {
    dispatch(changeDefaultVideo(videoName))
  },
  onRequestProducts: () => {
    dispatch(requestProducts());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APlayScene);
