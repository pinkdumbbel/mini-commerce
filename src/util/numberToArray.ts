const numberToArray = (totalPage: number) => {
  return Array(totalPage)
    .fill(0)
    .map((_, i) => i + 1);
};
export default numberToArray;
