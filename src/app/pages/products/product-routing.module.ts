import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductOperationComponent } from './product-operation/product-operation.component';
import { LayoutComponent } from '../../shared/layout/layout/layout.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {path:'', component:ProductOperationComponent },
      {path:'list', component:ProductListComponent },

    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     [RouterModule.forChild(routes)]
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
