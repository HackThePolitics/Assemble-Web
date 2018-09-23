import { LOAD_PROBLEM_CONTENT, LOAD_SOLUTION_CONTENT } from '../constants';

const initialState = {
  problems: {
    id: 'DEFAULT',
    type: 'problems'
  },
  solutions: {
    id: 'DEFAULLT',
    type: 'solutions'
  }
};

export const render = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROBLEM_CONTENT:
      return { ...state, problems: action.payload };
    case LOAD_SOLUTION_CONTENT:
      return { ...state, solutions: action.payload };
    default:
      return state;
  }
};

export default render;
