import { LOAD_PROBLEM_CONTENT } from '../constants';

const loadIdForRender = (id, type) => dispatch => {
  dispatch({
    type: LOAD_PROBLEM_CONTENT,
    payload: { id, type }
  });
};
export default {
  loadIdForRender
};
