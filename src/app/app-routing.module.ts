import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // a rota revenue está com lazyloading funcionando
  {
    path: 'revenue', loadChildren: () => import('./revenue/revenue.module').then(
      module => module.RevenueModule
    )
  },
  {
    path: 'new-revenue', loadChildren: () => import('./new-revenue/new-revenue.module').then(
      m => m.NewRevenueModule
    )
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
