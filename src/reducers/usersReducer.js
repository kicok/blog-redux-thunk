export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    //사용자 상태 배열에 사용자를 반복적으로 추가하기 때문에 ..
    default:
      return state;
  }
};
