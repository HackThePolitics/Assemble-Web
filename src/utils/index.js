export const filterItemsToInclude = (problems, filter) => {
  if (filter) {
    return problems.filter(problem => problem.level === filter).slice(0, 3);
  }
  return problems;
};
