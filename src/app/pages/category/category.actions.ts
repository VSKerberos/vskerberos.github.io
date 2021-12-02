import {ICategory} from '../../core/core/models/category';
import { createAction, props } from '@ngrx/store'

export const loadAllCategories = createAction(
    "[Categories Resolver] Load All Categories"
);


export const allCategoriesLoaded = createAction(
    "[Load Categories Effect] All Categories Loaded",
    props<{categories: ICategory[]}>()
);