import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from '../../shared/layout/layout/layout.component';
import {CategoryComponent} from './category.component';
import { CategoriesResolver } from './category.resolver';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'', component:CategoryComponent,
    resolve: [CategoriesResolver]
     }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriesResolver]
})
export class CategoryRoutingModule { }
