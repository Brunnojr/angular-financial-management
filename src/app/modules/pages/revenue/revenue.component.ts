import { RevenueService } from '../../../services/revenue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revenue } from '../../../core/models/revenue';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  displayedColumns: string[] = ['description', 'value', 'revenueDate', 'category', 'releaseType', 'edit', 'delete'];
  dataSource: Revenue[] = [];
  totalRevenue = 0;
  totalExpense = 0;
  totalSum = 0;
  total
  actualMonth;
  selected = new Date().getMonth();
  atualTeste = {value: 0}
  periods = [
    {value: 0, viewValue: 'Janeiro'},
    {value: 1, viewValue: 'Fevereiro'},
    {value: 2, viewValue: 'Março'},
    {value: 3, viewValue: 'Abril'},
    {value: 4, viewValue: 'Maio'},
    {value: 5, viewValue: 'Junho'},
    {value: 6, viewValue: 'Julho'},
    {value: 7, viewValue: 'Agosto'},
    {value: 8, viewValue: 'Setembro'},
    {value: 9, viewValue: 'Outubro'},
    {value: 10, viewValue: 'Novembro'},
    {value: 11, viewValue: 'Dezembro'},
    {value: 12, viewValue: 'Todos'},
  ];

  constructor(
    public revenueService: RevenueService,
    public router: Router
  ) { }

  ngOnInit() {
    this.filterAtualMonthRevenues(this.atualTeste)
  }

  // listRevenues() {
  //   this.revenueService.getRevenues().subscribe((res) => {
  //     this.dataSource = res;
  //     // preenche a var totalRevenue com o a soma dos valores
  //     this.totalRevenue = 0;
  //     res.forEach( (array) => {
  //       this.totalRevenue = this.totalRevenue + array.value;
  //     })
  //   })
  // }

  filterAtualMonthRevenues(event) {
    // traz somente os dados do mes atual
    let startDate = "";
    let endDate = "";
    this.revenueService.getRevenues().subscribe((res) => {
      switch (event.value) {
        case 0:
        startDate = "2021-01-01T03:00:00.000Z";
        endDate = "2021-01-30T03:00:00.000Z";
        this.actualMonth = 'Janeiro'
        break;

        case 1:
        startDate = "2021-02-01T03:00:00.000Z";
        endDate = "2021-02-30T03:00:00.000Z";
        this.actualMonth = 'Fevereiro'
        break;

        case 2:
        startDate = "2021-03-01T03:00:00.000Z";
        endDate = "2021-03-30T03:00:00.000Z";
        this.actualMonth = 'Março'
        break;

        case 3:
        startDate = "2021-04-01T03:00:00.000Z";
        endDate = "2021-04-30T03:00:00.000Z";
        this.actualMonth = 'Abril'
        break;

        case 4:
        startDate = "2021-05-01T03:00:00.000Z";
        endDate = "2021-05-30T03:00:00.000Z";
        this.actualMonth = 'Maio'
        break;

        case 5:
        startDate = "2021-06-01T03:00:00.000Z";
        endDate = "2021-06-30T03:00:00.000Z";
        this.actualMonth = 'Junho'
        break;

        case 6:
        startDate = "2021-07-01T03:00:00.000Z";
        endDate = "2021-07-30T03:00:00.000Z";
        this.actualMonth = 'Julho'
        break;

        case 7:
        startDate = "2021-08-01T03:00:00.000Z";
        endDate = "2021-08-30T03:00:00.000Z";
        this.actualMonth = 'Agosto'
        break;

        case 8:
        startDate = "2021-09-01T03:00:00.000Z";
        endDate = "2021-09-30T03:00:00.000Z";
        this.actualMonth = 'Setembro'
        break;

        case 9:
        startDate = "2021-10-01T03:00:00.000Z";
        endDate = "2021-10-30T03:00:00.000Z";
        this.actualMonth = 'Outubro'
        break;

        case 10:
        startDate = "2021-11-01T03:00:00.000Z";
        endDate = "2021-11-30T03:00:00.000Z";
        this.actualMonth = 'Novembro'
        break;

        case 11:
        startDate = "2021-12-01T03:00:00.000Z";
        endDate = "2021-12-30T03:00:00.000Z";
        this.actualMonth = 'Dezembro'
        break;

        case 12:
        startDate = "2021-01-01T03:00:00.000Z";
        endDate = "2021-12-30T03:00:00.000Z";
        this.actualMonth = 'Ano inteiro'
        break;
      }
      let resAtualMonth = res.filter(
      m => new Date(m.revenueDate) >= new Date(startDate) && new Date(m.revenueDate) <= new Date(endDate)
      );
      this.dataSource = resAtualMonth
      // preenche a var totalRevenue com o a soma dos valores do mes
      this.totalRevenue = 0;
      this.totalExpense = 0;
      resAtualMonth.forEach( (array) => {
        if(array.releaseType == 'receita') {
          // this.totalRevenue = this.totalRevenue + array.value;
          this.totalRevenue = this.totalRevenue + array.value;
        } else {
          this.totalExpense = this.totalExpense + array.value;
        }
        this.totalSum = this.totalRevenue - this.totalExpense;
      })
    })
    this.selected = new Date().getMonth();
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
      // this.listRevenues()
      this.filterAtualMonthRevenues(this.atualTeste)
    })
  }

}

