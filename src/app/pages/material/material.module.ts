import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MaterialRoutingModule} from './material-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialEntryComponent } from './material-entry/material-entry.component';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: " ",
  suffix: " TRY",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};


@NgModule({
  declarations: [
    MaterialComponent,
    MaterialEntryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialRoutingModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
    
  ]
})
export class MaterialModule { }
