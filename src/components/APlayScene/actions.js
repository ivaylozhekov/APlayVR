export const ADD_ENTITY = 'ADD_ENTITY ';
export const CHANGE_DEFAULT_VIDEO = 'CHANGE_DEFAULT_VIDEO';
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';

export function addEntity(entity) {
  return { type: ADD_ENTITY , entity }
}

export function changeDefaultVideo(videoName) {
  return {
    type: CHANGE_DEFAULT_VIDEO,
    payload: videoName,
  }
}

function receivedProducts(products) {
  return {
    type: RECEIVED_PRODUCTS,
    payload: products,
  }
}

export function requestProducts() {
  return dispatch => {
    fetch('http://localhost:3001/rooms')
      .then(response => response.json())
      .then(products => {
        dispatch(receivedProducts(products));
      })
      .catch(err => console.log(err));
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