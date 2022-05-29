const getPageNum = (search: string) => {
  const pageNum = search.replace('?', '');
  return Number(pageNum.split('=')[1]);
};

export default getPageNum;
