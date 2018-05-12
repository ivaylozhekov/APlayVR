import React from 'react';

require('./leap-hands');

class LeapMotion extends React.PureComponent {
    render() {
        return (
            <a-entity leap-hands />
        );
    }
}

export default LeapMotion;
