import { Categories } from '../types/api';

const categoryTree = (categories: Categories) => {
  const newCategories = [];

  const parent = categories
    .filter((category) => !category.parent_id)
    .sort((a, b) => a.id - b.id);

  const child = categories
    .filter((category) => category.parent_id)
    .sort((a, b) => a.id - b.id);

  for (let i = 0; i < parent.length; i++) {
    newCategories.push(parent[i]);
    for (let j = 0; j < child.length; j++) {
      if (parent[i].id === child[j].parent_id) {
        newCategories.push(child[j]);
      }
    }
  }

  return newCategories;
};

export default categoryTree;
