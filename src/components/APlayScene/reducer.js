import { ADD_ENTITY } from './actions';

const initialState = [{
    primitiveType: 'box',
    color: 'blue',
    position: {x: 0, y: 0, z: -5}
}];

export default function ASceneReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return [
        ...state,
        action.entity
      ];
    default:
      return state;
  }
}