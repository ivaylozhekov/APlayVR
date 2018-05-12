import React from 'react';
import 'assets/scss/App.scss';
import APlayScene from './APlayScene/APlayScene';
import { connect } from 'react-redux'
import { addEntity } from './APlayScene/actions';

class App extends React.PureComponent {
  render() {
    const { addEntity } = this.props;

    return (
      <React.Fragment>
        <button
            style={{
              position: 'absolute',
              zIndex: 1000000
            }}
            onClick={() => addEntity({
            primitiveType: 'box',
            color: 'red',
            position: {x: 2, y: 0, z: -5}
          })}>
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
      dispatch(addEntity(entity))
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(App);
