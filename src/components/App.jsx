// import 'aframe';
// import 'aframe-particle-system-component';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import 'assets/scss/App.scss';

import io from "socket.io-client"
import {addEntityAsync, addEventAsync, removeEventAsync} from './APlayScene/actions';
import APlayScene from './APlayScene/APlayScene';
import LeapMotion from './LeapMotion';

/*global.sockets = {
  global: io("", {path: "/ws"}),
  events: io("/events", {path: "/ws"})
};*/

let i = 0;
let sound;
let eventTimeout;

class App extends React.PureComponent {

  componentWillMount() {
    /*if (sockets) {
      sockets.events.on("events/client/update", this.addEventReaction);

      sockets.events.emit("events/client/connect")
    }*/
  }

  componentDidMount() {
    sound = document.querySelector("#goal-sound");

    setInterval(() => {
      // sound.components.sound.playSound()

      this.addEventReaction({
        description: "Goal! " + new Date()
      })
    }, 7000)
  }


  addEventReaction = (event) => {
    const {addEvent, removeEvent} = this.props;
    const {description} = event;

    removeEvent();
    clearTimeout(eventTimeout);
    eventTimeout = null;

    addEvent(event);

    eventTimeout = setTimeout(() => {
      removeEvent()
    }, 3000)
    // sound.components.sound.playSound();
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
    },
    addEvent: event => {
      dispatch(addEventAsync(event))
    },
    removeEvent: () => {
      dispatch(removeEventAsync())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
