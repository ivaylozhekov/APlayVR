import 'aframe';
// import 'aframe-particle-system-component';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import 'assets/scss/App.scss';

import io from "socket.io-client"

global.sockets = {
  global: io("", {path: "/ws"}),
  events: io("/events", {path: "/ws"})
};

class App extends React.PureComponent {

  componentWillMount() {
    if (sockets) {
      sockets.events.on("events/client/update", (data) => console.log(data));

      sockets.events.emit("events/client/connect")
    }
  }

  render() {
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
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{
          x: 0,
          y: 0,
          z: -5
        }} />
        <Entity particle-system={{preset: 'snow'}} />
        <Entity light={{type: 'point'}} />
        <Entity gltf-model={{src: 'virtualcity.gltf'}} />
      </Scene>
    );
  }
}

export default App;
