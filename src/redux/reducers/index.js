import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments'
import photos from './photos'
import addresses from './addresses';
import map from './map'

export default combineReducers({
  posts: posts,
  comments: comments,
  photos: photos,
  addresses: addresses,
  map:map
});
