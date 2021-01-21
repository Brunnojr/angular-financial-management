import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditRevenueComponent } from './edit-revenue.component';

const routes: Routes = [
  {
    path: '', component: EditRevenueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRevenueRoutingModule { }
