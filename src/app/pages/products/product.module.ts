import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductOperationComponent } from './product-operation/product-operation.component';
import { ProductMaterialComponent } from './product-material/product-material.component';



@NgModule({
  declarations: [
    ProductOperationComponent,
    ProductMaterialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
