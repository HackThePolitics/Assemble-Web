import { LOAD_PROBLEM_CONTENT } from '../constants';

const initialState = {
  problem: {
    id: '1K5q4TNgbD8jT1A7mwbK',
    type: 'problems'
  }
};

const problems = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROBLEM_CONTENT:
      return { ...state, problems: action.payload };

    default:
      return state;
  }
};

export default problems;
