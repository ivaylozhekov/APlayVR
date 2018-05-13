// import 'aframe';
import 'aframe-orbit-controls-component-2';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import LeapMotion from '../LeapMotion';
import '../aframe/test';
import {changeDefaultVideo, requestProducts} from './actions.js';

const mainVideo = {
  width: 160,
  height: 90
};

class APlayScene extends React.Component {
  componentWillMount() {
    this.props.onRequestProducts();
  };

  render() {
    const {event, sceneEntities, defaultVideo, products} = this.props;

    const text = `${event.description}`;

    return (
      <Scene background="color: black" effects="godrays" godrays="src: #sun; threshold: 0. 0.33; intensity: 2">
        <a-assets>
          <audio id="ping" src="http://localhost:3000/sounds/ping_pong.mp3" preload="true"></audio>

          <video id="match1" src="http://localhost:3000/videos/8090.mp4" preload="auto"></video>
          <video id="video1" autoPlay="true" src={`http://localhost:3000/videos/${defaultVideo}`}></video>
        </a-assets>
        <Entity
          id="camera"
          camera
          orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.25; rotateSpeed:0.14; minDistance:3; maxDistance:15;"
          mouse-cursor=""
        />
        {/*The main video*/}
        <a-video src="#video1" width={mainVideo.width} height={mainVideo.height} position="0 45 -100"></a-video>

        <a-entity sound="src: #ping" position="0 0 0" id="goal-sound"></a-entity>
        {event.description && (
          <a-entity>
            <a-text
              value={text}
              position="-15 2 -30"
              width="30"
            />
            <a-entity id="sun" geometry="primitive: sphere; radius: 10;" material="shader: flat; transparent: true; color: #ffffff" light="type: directional; color: #FFF; intensity: 0.6" position="0 20 -40" />
          </a-entity>
        )}

        <a-video src="#video1" width="160" height="90" position="0 45 -100"></a-video>
        
        {/*Video Streams*/}

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
        </Entity>

        {/*Adidas Prroducts*/}
        <Entity position={{x: -100, y: 0, z: 0}} rotation={{x: 0, y: 90, z: 0}}>
          {/*{products.map((product, index) => {
            <a-entity position={{x: 10*(4+index), y: 0, z: 0}}>
              <Entity
            scale={{x: 40, y: 40, z: 10}}
            primitive="a-image"
            src={`http://localhost:3000/${product.images[0]}`}
          />
              <Entity
            scale={{x: 40, y: 40, z: 10}}
            primitive="a-text"
            value="Purchase now!"
          />
          </a-entity>
          })};*/}


            <Entity
            scale={{x: 40, y: 70, z: 0}}
            position={{x: 0, y: 50, z: 0}}
            rotation={{x:0, y:10, z: 0}}                                       
            primitive="a-image"
            src={`http://localhost:3000/img/test.png`}
          />

            <Entity
            scale={{x: 40, y: 70, z: 0}}
            position={{x: -50, y: 50, z: 20}}     
            rotation={{x:0, y:20, z: 0}}                           
            primitive="a-image"
            src={`http://localhost:3000/img/cleats.png`}
          />

            <Entity
            scale={{x: 40, y: 70, z: 0}}
            position={{x: -100, y: 50, z: 40}}
            rotation={{x:0, y:30, z: 0}}            
            primitive="a-image"
            src={`http://localhost:3000/img/cleats2.png`}
          />
            <Entity
            scale={{x: 40, y: 70, z: 0}}
            position={{x: -135, y: 50, z: 80}}
            rotation={{x:0, y:80, z: 0}}            
            primitive="a-image"
            src={`http://localhost:3000/img/cleats3.png`}
          />
            <Entity
            scale={{x: 40, y: 70, z: 0}}
            position={{x: -150, y: 50, z: 130}} 
            rotation={{x:0, y:90, z: 0}}       
            primitive="a-image"
            src={`http://localhost:3000/img/test2.png`}
          />

        </Entity>




        <Entity id="target" test={{x: 0, y: 3, z: -10}} />
        <Entity test={{x: 0, y: 5, z: 5}} />
        {sceneEntities.map(entity => entity)}
        <Entity particle-system={{preset: 'snow'}} />
        <Entity light={{type: 'point'}} position={{x: 0, y: 15, z: 0}} />
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
