import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../components/ListItem';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsState {
  value: Comment[];
}

interface RootState {
  comments: CommentsState;
}

const CommentsScreen = () => {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_COMMENTS'});
  }, []);

  return (
    <ListItem data={comments.value} titleText="Post title:" text="Comment:" />
  );
};

export default CommentsScreen;
