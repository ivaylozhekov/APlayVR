import {ADD_ENTITY, CHANGE_DEFAULT_VIDEO, RECEIVED_PRODUCTS} from './actions';

const initialState = {
  sceneEntities: [],
  videoName: '8084.mp4',
  products: [],
  videos: [{
    fileName: '8082.mkv',
    position: '120 60 110',
    rotation: '0 -90 0'
  }, {
    fileName: '8084.mkv',
    position: '120 60 60',
    rotation: '0 -90 0'
  }, {
    fileName: '8086.mkv',
    position: '120 60 -70',
    rotation: '0 -90 0'
  }, {
    fileName: '8088.mkv',
    position: '120 60 -20',
    rotation: '0 -90 0'
  }, {
    fileName: '8092.mkv',
    position: '120 30 110',
    rotation: '0 -90 0'
  }, {
    fileName: '8094.mkv',
    position: '120 30 60',
    rotation: '0 -90 0'
  }, {
    fileName: '8090.mp4',
    position: '120 30 -70',
    rotation: '0 -90 0'
  }, {
    fileName: 'ref_cam__mls_all-stars_vs._real_madrid.mp4',
    position: '120 30 -20',
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
