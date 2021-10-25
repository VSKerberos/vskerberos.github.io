import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from '../../shared/layout/layout/layout.component';
import {CategoryComponent} from './category.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'', component:CategoryComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
