import pageRange from './pageRange';

const pagiNationSlice = (totalPage: number, currentPage: number) => {
  const minPageNum = 1;
  const maxPageListCnt = 7;
  let visiblePageNums: number[] = [];

  //현재 선택된 페이지가 7페이지 보다 작고 전체페이지 수가 7페이지 보다 크거나 같을 경우
  //[1...7] 배열 리턴
  if (currentPage < maxPageListCnt && totalPage >= maxPageListCnt)
    visiblePageNums = pageRange(minPageNum, maxPageListCnt);

  //현재 선택된 페이지가 7페이지 보다 작고 전체페이지 수가 7페이지 보다 작을 경우
  //[1...전체페이지] 배열 리턴
  if (currentPage < maxPageListCnt && totalPage < maxPageListCnt)
    visiblePageNums = pageRange(minPageNum, totalPage);

  //현재 선택된 페이지가 7페이지 보다 크거나 같고 (전체페이지수 - 6) 보다 작거나 같을 경우
  //7개의 배열 요소중 중간값이 현재 페이지가 되는 배열 리턴
  if (
    currentPage >= maxPageListCnt &&
    currentPage <= totalPage - maxPageListCnt + 1
  ) {
    const sliceNum = Math.floor(maxPageListCnt / 2);
    const leftPageNums = pageRange(currentPage - sliceNum, currentPage);
    const rightPageNums = pageRange(currentPage + 1, currentPage + sliceNum);

    visiblePageNums = [...leftPageNums, ...rightPageNums];
  }

  //현재 페이이지가 (전체페이지-6) 보다 클 경우
  //마지막 페이지 7개의 배열 리스트 리턴
  if (currentPage > totalPage - maxPageListCnt + 1) {
    visiblePageNums = pageRange(totalPage - maxPageListCnt + 1, totalPage);
  }

  return visiblePageNums;
};

export default pagiNationSlice;
