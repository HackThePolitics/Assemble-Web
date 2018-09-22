import { LOAD_PROBLEM_CONTENT } from '../constants';

const initialState = {
  problem: {
    id: 'WaJE9FppP9x1Wc4EaFk1',
    type: 'problem'
  }
};

const problems = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROBLEM_CONTENT:
      return { ...state, problem: action.payload };

    default:
      return state;
  }
};

export default problems;
