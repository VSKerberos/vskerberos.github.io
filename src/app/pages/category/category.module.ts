import { StoreModule } from '@ngrx/store';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {CategoryComponent} from './category.component';
import {CategoryRoutingModule} from './category-routing.module';
import { EffectsModule } from '@ngrx/effects';
import {CategoryEffects} from './category.effects';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CategoriesResolver } from './category.resolver';
import {categoriesReducer} from './reducers/category-reducers';


const entityMetaData: EntityMetadataMap = {
  Category: {
    
  }

};

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
    EffectsModule.forFeature([CategoryEffects]),
    StoreModule.forFeature("categories",categoriesReducer)
    ],
    providers: [ CategoriesResolver]
})
export class CategoryModule {

  constructor(private eds: EntityDefinitionService){

    eds.registerMetadataMap(entityMetaData);
  }
 }
