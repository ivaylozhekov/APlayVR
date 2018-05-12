import 'aframe';
// import 'aframe-particle-system-component';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import 'assets/scss/App.scss';

import io from "socket.io-client"
import {addEntityAsync} from './APlayScene/actions';
import APlayScene from './APlayScene/APlayScene';
import LeapMotion from './LeapMotion';

global.sockets = {
  global: io("", {path: "/ws"}),
  events: io("/events", {path: "/ws"})
};

let i = 0;

class App extends React.PureComponent {

  componentWillMount() {
    if (sockets) {
      sockets.events.on("events/client/update", this.addEventReaction);

      sockets.events.emit("events/client/connect")
    }
  }

  addEventReaction = (event) => {
    const {addEntity} = this.props;
    const {description} = event;

    console.log({ev: description});

    addEntity(<Entity text={{value: description}} position="0 0 0" />);
    addEntity(
      <a-sound src="#ping" autoplay="true" position="0 0 0"></a-sound>
    );
    // addEntity(<a-entity sound="src: #ping" autoplay="true" position="0 0 0"></a-entity>);

    i++;

    /* addEntity({
                 primitiveType: 'box',
                 color: 'red',
                 position: {x: 2, y: 0, z: -5}
               }*/
  };

  render() {
    const {addEntity} = this.props;

    return (
      <React.Fragment>
        <button
          style={{
            position: 'absolute',
            zIndex: 1000000
          }}
          onClick={() => addEntity(<Entity
            geometry={{primitive: "box"}}
            material={{color: "red"}}
            position={{x: 2, y: 0, z: -5}}
          />)}>
          Add a red box
        </button>
        <APlayScene></APlayScene>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEntity: entity => {
      dispatch(addEntityAsync(entity))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
