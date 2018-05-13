export const ADD_ENTITY = 'ADD_ENTITY ';
export const CHANGE_DEFAULT_VIDEO = 'CHANGE_DEFAULT_VIDEO';
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';
export const ADD_EVENT = 'ADD_EVENT ';
export const REMOVE_EVENT = 'REMOVE_EVENT ';

export function addEntity(entity) {
  return {type: ADD_ENTITY, entity}
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
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(products => {
        dispatch(receivedProducts(products));
      })
      .catch(err => console.log(err));
  }
}

export function addEntityAsync(entity) {
  return dispatch => dispatch(addEntity(entity));
}

export function addEvent(event) {
  return {type: ADD_EVENT, event}
}

export function removeEvent(event) {
  return {type: REMOVE_EVENT}
}

export function addEventAsync(event) {
  return dispatch => dispatch(addEvent(event));
}

export function removeEventAsync() {
  return dispatch => dispatch(removeEvent());
}