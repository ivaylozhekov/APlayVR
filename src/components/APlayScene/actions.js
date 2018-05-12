export const ADD_ENTITY = 'ADD_ENTITY ';

export function addEntity(entity) {
  return { type: ADD_ENTITY , entity }
}

export function addEntityAsync(entity) {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addEntity(entity));
    }, 1000);
  };
}