import React from 'react';
require('aframe-leap-hands').registerAll();

class LeapMotion extends React.PureComponent {
    render() {
        return (
            <a-entity camera="near: 0.01" look-controls position="0 1.5 0">
                <a-entity leap-hand="hand: left"></a-entity>
                <a-entity leap-hand="hand: right"></a-entity>
            </a-entity>
        );
    }
}

export default LeapMotion;
