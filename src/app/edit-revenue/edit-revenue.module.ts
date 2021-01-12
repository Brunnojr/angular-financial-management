import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRevenueRoutingModule } from './edit-revenue-routing.module';
import { EditRevenueComponent } from './edit-revenue.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [EditRevenueComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatInputModule,
    EditRevenueRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditRevenueModule { }
