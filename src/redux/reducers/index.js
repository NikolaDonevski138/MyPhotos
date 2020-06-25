import {combineReducers} from 'redux';
import posts from './posts';
import comments from './comments'
import photos from './photos'

export default combineReducers({
  posts: posts,
  comments:comments,
  photos:photos
});
