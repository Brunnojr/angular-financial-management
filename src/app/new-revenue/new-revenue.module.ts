import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRevenueRoutingModule } from './new-revenue-routing.module';
import { NewRevenueComponent } from './new-revenue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewRevenueComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    NewRevenueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [NewRevenueComponent],
})
export class NewRevenueModule { }
