import _ from 'lodash';
import { jsonPlaceholder } from '../api';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// Original functional before using memoize from lodash
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const uniqueIds = _.uniq(_.map(getState().posts, 'userId'));
  // uniqueIds.forEach(id => dispatch(fetchUser(id)));

// Magic of lodash
  _.chain(getState().posts)
    .map('userId')
     .uniq()
      .forEach(id => dispatch(fetchUser(id)))
        .value();
};

// ***************************************************** //
// Memoize allow solving issue with overfetching problem //
// ***************************************************** //

// _ before function, declaring like private function for other engineers and yourself.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };
