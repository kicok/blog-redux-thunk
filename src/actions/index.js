import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  // Bad approach!!!!!
  // Error: Actions must be plain objects. Use custom middleware for async actions.
  const response = await jsonPlaceholder.get('/posts');
  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
