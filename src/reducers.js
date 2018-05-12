import { combineReducers } from 'redux';
import ASceneReducer from './components/APlayScene/reducer';

const APlayApp = combineReducers({
  mainScene: ASceneReducer
});

export default APlayApp;