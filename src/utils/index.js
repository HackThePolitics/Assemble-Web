export const filterItemsToInclude = (problems, filter) => {
  if (filter) {
    return problems.filter(problem => problem.level === filter);
  }
  return problems;
};
