import {
  UPDATE_POSTAL_CODE,
} from '../constants';

const updatePostalCode = (postalCode) => {
  return (dispatch) => {
    localStorage.setItem('postal', postalCode);

    return dispatch({
      type: UPDATE_POSTAL_CODE,
      payload: postalCode,
    });
  };
};

export default {
  updatePostalCode,
};
