import {ADD_ENTITY, CHANGE_DEFAULT_VIDEO, RECEIVED_PRODUCTS} from './actions';

const initialState = {
  sceneEntities: [],
  videoName: 'match.mp4',
  products: [],
  videos: [{
    fileName: 'gm2.mp4',
    position: '120 60 60',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm3.mp4',
    position: '120 60 -70',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm2.mp4',
    position: '120 60 -20',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm3.mp4',
    position: '120 30 110',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm4.mp4',
    position: '120 30 60',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm5.mp4',
    position: '120 30 -70',
    rotation: '0 -90 0'
  }, {
    fileName: 'gm4.mp4',
    position: '120 30 -20',
    rotation: '0 -90 0'
  }, {
    fileName: 'ref_cam.mp4',
    position: '120 60 110',
    rotation: '0 -90 0'
  }]
};

export default function ASceneReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return {
        ...state,
        sceneEntities: action.entity
      };
    case CHANGE_DEFAULT_VIDEO:
      return {
        ...state,
        videoName: action.payload
      }
    case RECEIVED_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}
