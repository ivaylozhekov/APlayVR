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
    const {event, sceneEntities, defaultVideo, products, videos} = this.props;

    const showEvent = event && event.description;

    const text = showEvent ? this.getEventDescription(event) : "";

    return (
      <Scene background="color: black">
        <a-assets>
          <audio id="goal" src="http://localhost:3000/sounds/goal.mp3" preload="true"></audio>
          <video id="video1" autoPlay="true" src={`http://localhost:3000/videos/${defaultVideo}`}></video>
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
          <a-video
            src="#video1"
            width={mainVideo.width}
            height={mainVideo.height}
            position="0 45 -100"
          ></a-video>

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

          <a-plane color="black" height="160" width="400" position="122 45 0" rotation="0 -90  0"></a-plane>

          {/*Adidas Prroducts*/}
          <Entity position={{x: -100, y: 0, z: 0}} rotation={{x: 0, y: 90, z: 0}}>
            <Entity
              scale={{x: 40, y: 70, z: 0}}
              position={{x: 0, y: 50, z: 0}}
              rotation={{x: 0, y: 10, z: 0}}
              primitive="a-image"
              src={`http://localhost:3000/img/test.png`}
            />

            <Entity
              scale={{x: 40, y: 70, z: 0}}
              position={{x: -50, y: 50, z: 20}}
              rotation={{x: 0, y: 20, z: 0}}
              primitive="a-image"
              src={`http://localhost:3000/img/cleats.png`}
            />

            <Entity
              scale={{x: 40, y: 70, z: 0}}
              position={{x: -100, y: 50, z: 40}}
              rotation={{x: 0, y: 30, z: 0}}
              primitive="a-image"
              src={`http://localhost:3000/img/cleats2.png`}
            />

            <Entity
              scale={{x: 40, y: 70, z: 0}}
              position={{x: -135, y: 50, z: 80}}
              rotation={{x: 0, y: 80, z: 0}}
              primitive="a-image"
              src={`http://localhost:3000/img/cleats3.png`}
            />

            <Entity
              scale={{x: 40, y: 70, z: 0}}
              position={{x: -150, y: 50, z: 130}}
              rotation={{x: 0, y: 90, z: 0}}
              primitive="a-image"
              src={`http://localhost:3000/img/test2.png`}
            />
          </Entity>

          <Entity
            scale={{x: 20, y: 20, z: 20}}
            position={{x: 120, y: 45, z: 20}}
            rotation={{x: 0, y: -90, z: 0}}
            primitive="a-image"
            src="http://localhost:3000/img/adidas.png"
          />

          {videos.map(video => (
            <React.Fragment>
              <a-asset>
                <video
                  id={video.fileName}
                  autoPlay="true"
                  src={`/videos/${video.fileName}`}
                >
                </video>
              </a-asset>
              <a-video muted src={`#${video.fileName}`} width={160 / 2} height={90 / 2} position={video.position} rotation={video.rotation}></a-video>
            </React.Fragment>
          ))}

          <Entity id="target" test={{x: 0, y: 3, z: -10}} />
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
    videos: state.mainScene.videos,
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
