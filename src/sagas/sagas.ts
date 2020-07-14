import {takeEvery, put, all, fork} from 'redux-saga/effects';

interface photoItems {
  fileName: string;
  latitude: number;
  longitude: number;
  uri: string;
}

interface addPhoto {
  payload: photoItems;
}

interface AddressCoordinates {
  latitude: number;
  longitude: number;
}

interface Address {
  payload: AddressCoordinates;
}

function* postsAsync() {
  try {
    const posts = yield fetch(
      'https://jsonplaceholder.typicode.com/posts',
    ).then(response => response.json());
    yield put({type: 'FETCH_POST_ASYNC', payload: posts});
  } catch (e) {}
}

function* commentsAsync() {
  try {
    const comments = yield fetch(
      'https://jsonplaceholder.typicode.com/comments',
    ).then(response => response.json());
    yield put({type: 'FETCH_COMMENTS_ASYNC', payload: comments});
  } catch (e) {
    console.log(e);
  }
}

function* addPhotoAsync(action: addPhoto) {
  try {
    yield put({type: 'ADD_PHOTO_ASYNC', payload: action.payload});
  } catch (e) {
    console.log(e);
  }
}

function* addAddressAsync(action: Address) {
  try {
    const response = yield fetch(
      `https://eu1.locationiq.com/v1/reverse.php?key=pk.0ca27b9f7c9d3ecd8767b915f826a8b6&lat=${
        action.payload.latitude
      }&lon=${action.payload.longitude}&format=json`,
    ).then(result => result.json());
    console.log(response, 'resp');
    yield put({type: 'ADD_ADDRESS_ASYNC', payload: response});
  } catch (e) {
    console.log(e);
  }
}

function* addMapAsync(action: Address) {
  try {
    const response = yield fetch(
      `https://maps.locationiq.com/v2/staticmap?key=pk.0ca27b9f7c9d3ecd8767b915f826a8b6&center=${
        action.payload.latitude
      },${action.payload.longitude}&zoom=16&size=480x480&markers=${
        action.payload.latitude
      },${action.payload.longitude}`,
    );
    yield put({type: 'ADD_MAP_ASYNC', payload: response.url});
  } catch (e) {
    console.log(e);
  }
}

function* getPhotoAsync() {
  try {
    const response = yield fetch(
      `https://jsonplaceholder.typicode.com/photos`,
    ).then(res => res.json());
    yield put({type: 'GET_PHOTOS_ASYNC', payload: response});
  } catch (e) {
    console.log(e);
  }
}

function* watchPost() {
  yield takeEvery('FETCH_POST', postsAsync);
}

function* watchComments() {
  yield takeEvery('FETCH_COMMENTS', commentsAsync);
}

function* watchAddPhoto() {
  yield takeEvery('ADD_PHOTO', addPhotoAsync);
}

function* watchAddress() {
  yield takeEvery('ADD_ADDRESS', addAddressAsync);
}

function* watchMap() {
  yield takeEvery('ADD_MAP', addMapAsync);
}

function* watchPhoto() {
  yield takeEvery('GET_PHOTO', getPhotoAsync);
}

export default function* rootSaga() {
  yield all([
    fork(watchPost),
    fork(watchComments),
    fork(watchAddPhoto),
    fork(watchAddress),
    fork(watchMap),
    fork(watchPhoto),
  ]);
}
