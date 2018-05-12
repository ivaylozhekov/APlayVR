export const ADD_ENTITY = 'ADD_ENTITY ';

export function addEntity(entity) {
  return { type: ADD_ENTITY , entity }
}

export function addEntityAsync(entity) {
  return dispatch => dispatch(addEntity(entity));
}