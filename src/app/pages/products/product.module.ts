import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductOperationComponent } from './product-operation/product-operation.component';
import { ProductMaterialComponent } from './product-material/product-material.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import {NgxPrintModule} from 'ngx-print';



@NgModule({
  declarations: [
    ProductOperationComponent,
    ProductMaterialComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    NgxPrintModule
  
  ]

})
export class ProductModule { }
