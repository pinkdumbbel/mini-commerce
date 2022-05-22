const pagiNationSlice = (
  totalArr: number[],
  currentPage: number,
  lastPageNum: number
) => {
  const minPage = 1;
  const maxPageNum = 7;
  const lastPageMinNum = lastPageNum - maxPageNum;
  const midNum = Math.round(maxPageNum / 2);
  const totalPageNums = [...totalArr];
  let visiblePageNums: number[] = totalArr.slice(minPage - 1, maxPageNum);

  if (currentPage >= maxPageNum) {
    visiblePageNums = [
      ...totalPageNums.slice(currentPage - midNum, currentPage),
      ...totalPageNums.slice(currentPage, currentPage + midNum - 1),
    ];

    if (currentPage > lastPageMinNum && currentPage !== lastPageMinNum + 1) {
      visiblePageNums = totalPageNums.slice(lastPageMinNum, lastPageNum);
    }
  }

  return visiblePageNums;
};

export default pagiNationSlice;
