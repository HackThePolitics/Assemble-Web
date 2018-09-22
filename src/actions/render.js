import { LOAD_PROBLEM_CONTENT } from "../constants";

const loadProblemContent = docDetails => dispatch =>
  dispatch({
    type: LOAD_PROBLEM_CONTENT,
    payload: docDetails
  });

export default {
  loadProblemContent
};
