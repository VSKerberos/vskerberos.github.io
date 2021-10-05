import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MaterialRoutingModule} from './material-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialEntryComponent } from './material-entry/material-entry.component';



@NgModule({
  declarations: [
    MaterialComponent,
    MaterialEntryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialRoutingModule
    
  ]
})
export class MaterialModule { }
