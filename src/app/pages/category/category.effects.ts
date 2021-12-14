
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import {CategoryActions} from './action-types';
import { allCategoriesLoaded } from './category.actions';


@Injectable()
export class CategoryEffects {

    loadCategories$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(CategoryActions.loadAllCategories),
            concatMap(action => 
                this.service.getCategories()),
                map(categories => allCategoriesLoaded({categories}))
        )
    );
    constructor(private actions$: Actions,private service: FireBaseService) {


    }
}