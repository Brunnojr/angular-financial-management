import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RevenueResolve } from './core/resolvers/revenue-resolve';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // a rota revenue está com lazyloading funcionando
  {
    path: 'revenue', loadChildren: () => import('./modules/pages/revenue/revenue.module').then(
      module => module.RevenueModule
    )
  },
  {
    path: 'new-revenue', loadChildren: () => import('./modules/pages/new-revenue/new-revenue.module').then(
      m => m.NewRevenueModule
    )
  },
  {
    path: 'edit-revenue/:id', loadChildren: () => import('./modules/pages/edit-revenue/edit-revenue.module').then(
      m => m.EditRevenueModule
    ),
    resolve: {
      revenue: RevenueResolve
    }
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
