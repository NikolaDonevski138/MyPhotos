import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../components/ListItem';

const CommentsScreen = () => {
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_COMMENTS'});
  }, []);

  return (
    <ListItem data={comments.value} titleText="Post title:" text="Comment:" />
  );
};

export default CommentsScreen;
