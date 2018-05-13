// import 'aframe';
// import 'aframe-particle-system-component';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import {connect} from 'react-redux';
import 'assets/scss/App.scss';

import io from "socket.io-client"
import {changeDefaultVideo, addEntityAsync, addEventAsync, removeEventAsync} from './APlayScene/actions';
import APlayScene from './APlayScene/APlayScene';
import LeapMotion from './LeapMotion';

global.sockets = {
  global: io("", {path: "/ws"}),
  events: io("/events", {path: "/ws"})
};

let sound;
let eventTimeout;

class App extends React.PureComponent {

  componentWillMount() {
    if (sockets) {
      sockets.events.on("events/client/update", this.addEventReaction);
      sockets.events.emit("events/client/connect")
    }
  }

  componentDidMount() {
    sound = document.querySelector("#goal-sound");
  }

  addEventReaction = (event) => {
    this.addEventNotification(event);
  };

  addEventNotification = (event) => {
    const {addEvent} = this.props;

    clearTimeout(eventTimeout);
    eventTimeout = null;

    addEvent(event);

    if (sound) {
      sound.components.sound.playSound();
    }

    this.dismissEventNotification()
  };

  dismissEventNotification = () => {
    const {removeEvent} = this.props;
    eventTimeout = setTimeout(() => {
      removeEvent();
      if (sound) {
        sound.components.sound.stopSound();
      }
    }, 5100);
  };

  render() {
    const {changeVideo, addEntity } = this.props;

    return (
      <React.Fragment>
        <button
            style={{
              position: 'absolute',
              zIndex: 1000000
            }}
            onClick={() => changeVideo('ref_cam__mls_all-stars_vs._real_madrid.mp4')}>
            Change Video
        </button>
        <APlayScene></APlayScene>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeVideo: video => {
      dispatch(changeDefaultVideo(video))
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
