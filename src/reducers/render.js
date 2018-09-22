import { LOAD_PROBLEM_CONTENT } from "../constants";

const initialState = {
  problem: {
    id: "ID010101",
    title: "Problem 101",
    description: "There are a lot of issues..."
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
