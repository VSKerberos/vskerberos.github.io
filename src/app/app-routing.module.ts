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
