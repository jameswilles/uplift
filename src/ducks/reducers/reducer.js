const initialState = {
  user: { },
  post: { }
}

const GET_USER = 'GET_USER',
CLEAR_USER = 'CLEAR_USER',
GET_POST = 'GET_POST',
CLEAR_POST = 'CLEAR_POST'

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj
  }
}

export function clearUser(){
  return {
      type: CLEAR_USER,
      payload: {}
  }
}

export function getPost(postObj){
  return {
    type: GET_POST,
    payload: postObj
  }
}

export function clearPost(){
  return {
    type: CLEAR_POST,
    payload: {}
  }
}

export default function reducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
      case GET_USER:
          return {...state, user: payload};
      case CLEAR_USER:
          return {...state, user: payload};
      case GET_POST:
          return {...state, post: payload};
      case CLEAR_POST:
          return {...state, post: payload};
      default:
          return state;
  }
}
