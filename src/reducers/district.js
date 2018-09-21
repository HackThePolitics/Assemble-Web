import {
  UPDATE_POSTAL_CODE,
} from '../constants';

const district = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_POSTAL_CODE:
      return {...state, postalCode: action.payload};

    default:
      return state;
  }
};

export default district;
