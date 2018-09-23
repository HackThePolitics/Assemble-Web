export const filterItemsToInclude = (problems, filter, max = 9) => {
  if (filter) {
    return problems.filter(problem => problem.level === filter).slice(0, max);
  }
  return problems;
};
