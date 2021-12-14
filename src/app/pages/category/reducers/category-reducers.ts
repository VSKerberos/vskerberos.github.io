import { ICategory } from './../../../core/core/models/category';
import {EntityState, createEntityAdapter} from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import {CategoryActions} from '../action-types';

export interface CategoryState extends EntityState<ICategory> {
    
}



export const adapter = createEntityAdapter<ICategory>();


export const initialCategoryState = adapter.getInitialState();


export const categoriesReducer = createReducer(

    initialCategoryState,

    on(CategoryActions.allCategoriesLoaded, (state,action) => adapter.setAll(action.categories,state))

);


export const {selectAll} =  adapter.getSelectors();
