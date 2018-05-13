import {ADD_ENTITY, CHANGE_DEFAULT_VIDEO, RECEIVED_PRODUCTS} from './actions';

const initialState = {
  sceneEntities: [],
  videoName: '8090.mp4',
  products: [],
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
      };
    case RECEIVED_PRODUCTS:
      return {
        products: action.payload,
        ...state,
      };
    default:
      return state;
  }
}
