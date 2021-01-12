import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [RevenueComponent],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    RevenueRoutingModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [RevenueComponent],
})
export class RevenueModule { }
