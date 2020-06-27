import { takeEvery, put, all, fork } from 'redux-saga/effects';
import jsonplaceholder from '../redux/apis/jsonplaceholder';

function* postsAsync() {
  try {
    //const posts = yield call(jsonplaceholder('/products').get());
    //yield put({type: 'FETCH_POST_ASYNC', payload: posts});
    const posts = yield fetch(
      'https://jsonplaceholder.typicode.com/posts',
    ).then(response => response.json());
    yield put({ type: 'FETCH_POST_ASYNC', payload: posts });
  } catch (e) {
    //yield put({type: 'FETCH_POST_FAILED'})
  }
}

function* commentsAsync() {
  try {
    const comments = yield fetch(
      'https://jsonplaceholder.typicode.com/comments',
    ).then(response => response.json());
    yield put({ type: 'FETCH_COMMENTS_ASYNC', payload: comments });
  } catch (e) {
    console.log(e);
  }
}

function* addPhotoAsync(action) {
  try {


    yield put({ type: 'ADD_PHOTO_ASYNC', payload: action.payload })
  } catch (e) {
    console.log(e)
  }
}

function* addAddressAsync(action) {
  

  try {
    const response = yield fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.0ca27b9f7c9d3ecd8767b915f826a8b6&lat=${action.payload.latitude}&lon=${action.payload.longitude}&format=json`)
      .then(result => result.json())
    yield put({ type: 'ADD_ADDRESS_ASYNC', payload: response })

  } catch (e) {
    console.log(e)
  }
}

function* addMapAsync(action) {
  try {
    const response = yield fetch(`https://maps.locationiq.com/v2/staticmap?key=pk.0ca27b9f7c9d3ecd8767b915f826a8b6&center=${action.payload.latitude},${action.payload.longitude}&zoom=16&size=480x480&markers=${action.payload.latitude},${action.payload.longitude}`)
      yield put({type:'ADD_MAP_ASYNC',payload:response.url})
  } catch(e){
    console.log(e)
  }
}

//key need be to other folder


function* watchPost() {
  yield takeEvery('FETCH_POST', postsAsync);
}


function* watchComments() {
  yield takeEvery('FETCH_COMMENTS', commentsAsync);
}

function* watchAddPhoto() {
  yield takeEvery('ADD_PHOTO', addPhotoAsync)
}

function* watchAddress() {
  yield takeEvery('ADD_ADDRESS', addAddressAsync)
}

function* watchMap(){
  yield takeEvery('ADD_MAP',addMapAsync)
}

export default function* rootSaga() {
  yield all([
    fork(watchPost),
    fork(watchComments),
    fork(watchAddPhoto),
    fork(watchAddress),
    fork(watchMap)
  ])
}