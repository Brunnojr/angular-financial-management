import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [RevenueComponent],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [RevenueComponent],
})
export class RevenueModule { }
