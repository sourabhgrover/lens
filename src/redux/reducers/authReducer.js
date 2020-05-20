import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        user: action.payload,
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isAuthenticating: false,
      });
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
