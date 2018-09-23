import { LOAD_PROBLEM_CONTENT, LOAD_SOLUTION_CONTENT } from '../constants';

const loadIdForRender = (id, type) => dispatch => {
  dispatch({
    type: LOAD_PROBLEM_CONTENT,
    payload: { id, type }
  });
};

const loadSolutionsIdForRender = (id, type) => dispatch => {
  dispatch({
    type: LOAD_SOLUTION_CONTENT,
    payload: { id, type }
  });
};

export default {
  loadIdForRender,
  loadSolutionsIdForRender
};
