import { LOGIN, IS_LOADING, LOGOUT } from "../constants/ActionTypes";

const INIT_STATE = {
  token: null,
  isLoading: false,
};

function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      return { ...INIT_STATE };
    default:
      return state;
  }
}

export default authReducer;
