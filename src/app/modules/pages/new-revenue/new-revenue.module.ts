import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRevenueRoutingModule } from './new-revenue-routing.module';
import { NewRevenueComponent } from './new-revenue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NewRevenueComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  imports: [
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    CommonModule,
    NewRevenueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatSelectModule
  ],
  exports: [NewRevenueComponent],
})
export class NewRevenueModule { }
