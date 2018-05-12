import { combineReducers } from 'redux';
import ASceneReducer from './components/APlayScene/reducer';

const APlayApp = combineReducers({
  sceneEntities: ASceneReducer
});

export default APlayApp;