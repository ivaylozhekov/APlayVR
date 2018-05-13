import {combineReducers} from 'redux';
import ASceneReducer from './components/APlayScene/reducer';
import EventsReducer from './components/APlayScene/events-reducer';

const APlayApp = combineReducers({
  event: EventsReducer,
  mainScene: ASceneReducer
});

export default APlayApp;