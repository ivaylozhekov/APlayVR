import { ADD_ENTITY } from './actions';

const initialState = [];

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
