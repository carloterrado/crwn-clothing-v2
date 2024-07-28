import { createSelector } from "reselect";

const selectCategoriesState = (state) => state.categories;

const selectCategoriesSlice = createSelector(
  [selectCategoriesState],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesSlice],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
