//import {dalay} from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects';
import jsonplaceholder from '../redux/apis/jsonplaceholder';

function* postsAsync() {
  //yield delay(4000)
  try {
    //const posts = yield call(jsonplaceholder('/products').get());
    //yield put({type: 'FETCH_POST_ASYNC', payload: posts});
    const posts = yield fetch(
      'https://jsonplaceholder.typicode.com/posts',
    ).then(response => response.json());
    yield put({type: 'FETCH_POST_ASYNC', payload: posts});
  } catch (e) {
    //yield put({type: 'FETCH_POST_FAILED'})
  }
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

export function* watchPost() {
  yield takeEvery('FETCH_POST', postsAsync);
}

//To do: include axios
//fix catch statement
export function* watchComments() {
  yield takeEvery('FETCH_COMMENTS', commentsAsync);
}
