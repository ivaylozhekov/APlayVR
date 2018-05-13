import {ADD_EVENT, REMOVE_EVENT} from './actions';

const initialState = {};

export default function EventsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return action.event;
    case REMOVE_EVENT:
      return initialState;
    default:
      return state;
  }
}
