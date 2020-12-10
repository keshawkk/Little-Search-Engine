import axios from 'axios';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SESSION_FAILED,
  SESSION_REMOVED,
} from '../constants/SessionConstants';

const getSession = () => async (dispatch) => {
  dispatch({ type: SESSION_REQUEST });
  try {
    const data = await axios.post('/api/session');
    dispatch({ type: SESSION_SUCCESS, payload: data.data.user });
  } catch (error) {
    dispatch({ type: SESSION_FAILED, payload: error.response.data.message });
  }
};

const removeSession = () => ({ type: SESSION_REMOVED });

export { getSession, removeSession };
