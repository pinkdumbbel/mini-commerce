import { Categories } from '../types/api';

const categoryTree = (categories: Categories) => {
  const clone = [...categories, { id: 18, parent_id: 6, name: 'test' }];

  const newCategories = [];
  const parent = clone
    .filter((category) => !category.parent_id)
    .sort((a, b) => a.id - b.id);

  const child = clone
    .filter((category) => category.parent_id)
    .sort((a, b) => a.id - b.id);

  console.log(parent);
  console.log(child);
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
