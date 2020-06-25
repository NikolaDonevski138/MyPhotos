//import {dalay} from 'redux-saga'
import {takeEvery, put,all,fork} from 'redux-saga/effects';
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

function* addPhotoAsync(action){
  try {
    
    
    yield put({type:'ADD_PHOTO_ASYNC', payload: action.payload})
  } catch(e) {
    console.log(e)
  }
}


function* watchPost() {
  yield takeEvery('FETCH_POST', postsAsync);
}

//To do: include axios
//fix catch statement
 function* watchComments() {
  yield takeEvery('FETCH_COMMENTS', commentsAsync);
}

function* watchAddPhoto() {
  yield takeEvery('ADD_PHOTO',addPhotoAsync)
}


// export default function* rootSaga(){
//   yield all([
//     watchPost(),
//     watchComments()
//    ])
// }


export default function* rootSaga(){
  yield all([
    fork(watchPost),
    fork(watchComments),
    fork(watchAddPhoto)
  ])
}