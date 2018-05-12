export const ADD_ENTITY = 'ADD_ENTITY ';
export const CHANGE_DEFAULT_VIDEO = 'CHANGE_DEFAULT_VIDEO ';

export function addEntity(entity) {
  return { type: ADD_ENTITY , entity }
}

export function changeDefaultVideo(videoName) {
  return {
    type: CHANGE_DEFAULT_VIDEO,
    payload: videoName,
  }
}

export function addEntityAsync(entity) {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addEntity(entity));
    }, 1000);
  };
}