import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux'
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
          src="/assets/videos/videoplayback.mp4">
        </video>
        </a-asset>
        <a-video src="#video" width="16" height="9" position="0 1 -1"></a-video>
        <Entity id="target" />
        <Entity test={{x: 0, y: 1, z: 2}} />
        <Entity primitive="a-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2000px-Adidas_Logo.svg.png" />
        {sceneEntities.map(entity => (
          <Entity geometry={{primitive: entity.primitiveType}} material={{color: entity.color}} position={entity.position}/>
        ))}
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
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