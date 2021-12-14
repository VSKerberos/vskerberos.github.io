import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout/layout.component';
import { AuthGuard } from '../../auth/auth.guard';
import { LoginComponent } from '../../auth/login/login.component';
import { CategoriesResolver } from '../../category/category.resolver';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    
    children: [
      {
        path:'', component:DashboardHomeComponent
        
      }
      
    ]
    ,
  },
  {
    path:'auth',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriesResolver]
})
export class DashboardRoutingModule { }
