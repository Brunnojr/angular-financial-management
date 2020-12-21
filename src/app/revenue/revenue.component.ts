import { RevenueService } from './../services/revenue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revenue } from '../core/models/revenue';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'value'];
  dataSource: Revenue[] = [];

  constructor(
    public revenueService: RevenueService,
    public router: Router
  ) { }

  ngOnInit() {
    this.listRevenues()
  }

  listRevenues() {
    this.revenueService.getRevenues().subscribe((res) => {
      this.dataSource = res;
    })
  }

  createRevenue() {
    this.router.navigate(['new-revenue']);
  }

}

