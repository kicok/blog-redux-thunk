import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// 1. fetchPosts()를 실행하여 목록을 state 에 저장한다.
// 2. 값을 getState 로 가져와서
// 3. uniq한 userId 목록을 만든다.
// 4. uniq한 userId 목록을 통해서 user 정보를 lazy 방식으로 가져온다. (await가 필요없음. 실제 component 에서 호출하여 가져오면 된다.)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // fetchPosts()를 실행하여 목록을 state 에 저장한다.

  //_.map(Collection, fieldName); Collection의 fieldName의 키값을 배열로 만들어 반환.
  // 즉 _.map(getState().posts, 'userId') posts 에서 userId 키값을 가져와 배열로 반환
  const userIds = _.uniq(_.map(getState().posts, 'userId')); //uniq한 userId 목록을 만든다.

  // await 필요없음. 여기서 원하는것은 개별사용자를 가져오도록 요청하는것을 시작하는 것 뿐.
  // 즉 기다릴 필요가 없다. lazy 방식.. component 파일에서 호출할때 값을 가져온다.
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
