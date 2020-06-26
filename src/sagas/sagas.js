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
  console.log('addAddressAsync')

  try {
    const response = yield fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.0ca27b9f7c9d3ecd8767b915f826a8b6&lat=${action.payload.latitude}&lon=${action.payload.longitude}&format=json`)
      .then(response => response.json())

    console.log(response, 'responsot')
    yield put({ type: 'ADD_ADDRESS_ASYNC', payload: response })

  } catch (e) {
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

export default function* rootSaga() {
  yield all([
    fork(watchPost),
    fork(watchComments),
    fork(watchAddPhoto),
    fork(watchAddress)
  ])
}