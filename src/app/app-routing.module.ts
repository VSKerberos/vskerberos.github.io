import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./pages/auth/auth.module').then(mod=>mod.AuthModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module')
  .then(mod => mod.DashboardModule),
  canActivate: [AuthGuard]
},
{
  path: 'material',
  loadChildren: () => import('./pages/material/material.module')
  .then(mod => mod.MaterialModule),
  canActivate: [AuthGuard]
},
{
  path:'category',
  loadChildren:()=> import('./pages/category/category.module').then(mod=>mod.CategoryModule),
  canActivate: [AuthGuard]
},
{
  path:'product',
  loadChildren:()=> import('./pages/products/product.module').then(mod=>mod.ProductModule),
  canActivate: [AuthGuard]
},

{
  path:'**',
  redirectTo:'auth'
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
