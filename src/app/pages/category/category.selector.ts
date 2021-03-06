import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategories from './reducers/category-reducers';
import { CategoryState } from './reducers/category-reducers';

export const selectCategoryState = createFeatureSelector<CategoryState>("categories");


export const selectAllCategories = createSelector(
selectCategoryState,
fromCategories.selectAll
);