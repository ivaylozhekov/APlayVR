import { ADD_ENTITY, CHANGE_DEFAULT_VIDEO } from './actions';

const initialState = {
  sceneEntities: [],
  videoName: '8084.mp4',
};

export default function ASceneReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return {
        sceneEntities: action.entity,
        ...state,
      };
    case CHANGE_DEFAULT_VIDEO:
        return {
          videoName: action.payload,
          ...state,
        }
    default:
      return state;
  }
}
