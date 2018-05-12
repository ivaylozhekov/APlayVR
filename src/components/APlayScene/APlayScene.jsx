import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux'
import LeapMotion from '../LeapMotion';

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
        <Entity id="target" />
        <Entity primitive="a-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2000px-Adidas_Logo.svg.png" />
        {sceneEntities.map(entity => (
          <Entity geometry={{primitive: entity.primitiveType}} material={{color: entity.color}} position={entity.position}/>
        ))}
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
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