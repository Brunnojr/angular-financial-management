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

  displayedColumns: string[] = ['id', 'description', 'value', 'revenueDate' ,'edit', 'delete'];
  dataSource: Revenue[] = [];
  totalRevenue = 0;

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
      // preenche a var totalRevenue com o a soma dos valores
      this.totalRevenue = 0;
      res.forEach( (array) => {
        this.totalRevenue = this.totalRevenue + array.value;
      })
    })
  }

  createRevenue() {
    this.router.navigate(['new-revenue']);
  }

  editRevenue(id) {
    // passa o id na rota
    this.router.navigate(['edit-revenue', id]);
  }

  deleteRevenue(id) {
    this.revenueService.deleteRevenue(id).subscribe(() => {
      this.listRevenues()
    })
  }

}

