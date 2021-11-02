import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
},
{
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module')
  .then(mod => mod.DashboardModule)
},
{
  path: 'material',
  loadChildren: () => import('./pages/material/material.module')
  .then(mod => mod.MaterialModule)
},
{
  path:'category',
  loadChildren:()=> import('./pages/category/category.module').then(mod=>mod.CategoryModule)
},
{
  path:'product',
  loadChildren:()=> import('./pages/products/product.module').then(mod=>mod.ProductModule)
},
{
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
