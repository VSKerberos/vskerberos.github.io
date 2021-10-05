
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../shared/layout/layout/layout.component';
import {MaterialComponent} from './material.component';

const routes: Routes = [
    {
      path:'',
      component: LayoutComponent,
      children: [
        {path:'', component:MaterialComponent }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class MaterialRoutingModule{}