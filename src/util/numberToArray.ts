const numberToArray = (totalPage: number) => {
  return Array.from({ length: totalPage }, (_, i) => i + 1);
};
export default numberToArray;
