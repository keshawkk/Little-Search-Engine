import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SESSION_FAILED,
  SESSION_REMOVING,
  SESSION_REMOVED,
} from '../constants/SessionConstants';

function sessionReducer(state = { loading: false, checked: false }, action) {
  switch (action.type) {
    case SESSION_REQUEST:
      return { loading: true, checked: false };
    case SESSION_SUCCESS:
      return { loading: false, sessionInfo: action.payload, checked: true };
    case SESSION_FAILED:
      return { loading: false, error: action.payload, checked: true };
    // This case is not in use
    case SESSION_REMOVING:
      return { sessionInfo: state.sessionInfo, loading: true, checked: true };
    case SESSION_REMOVED:
      return { loading: false, checked: true };
    default:
      return state;
  }
}

export default sessionReducer;
