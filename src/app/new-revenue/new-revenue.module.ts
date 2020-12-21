import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRevenueRoutingModule } from './new-revenue-routing.module';
import { NewRevenueComponent } from './new-revenue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewRevenueComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    NewRevenueRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [NewRevenueComponent],
})
export class NewRevenueModule { }
