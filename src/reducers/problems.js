import { UPDATE_PROBLEMS_ALL } from "../constants";

const initialState = [
  { title: "Problem 101", description: "There are a lot of issues..." },
  { title: "Problem 103", description: "There are a lot of more issues..." },
  {
    title: "Problem 102",
    description: "There are a EVEN MORE of more issues here..."
  }
];

const problems = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROBLEMS_ALL:
      return { ...state, all: action.payload };

    default:
      return state;
  }
};

export default problems;
