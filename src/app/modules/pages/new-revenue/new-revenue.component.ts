import { RevenueService } from '../../../services/revenue.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Revenue } from '../../../core/models/revenue';

@Component({
  selector: 'app-new-revenue',
  templateUrl: './new-revenue.component.html',
  styleUrls: ['./new-revenue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewRevenueComponent implements OnInit {
  newRevenueForm: FormGroup
  options = [
    {value: 'despesa', viewValue: 'Despesa'},
    {value: 'receita', viewValue: 'Receita'}
  ];

  categories = [
    {value: 'Renda principal', viewValue: 'Renda principal'},
    {value: 'Renda extra', viewValue: 'Renda extra'},
    {value: 'Social', viewValue: 'Social'},
    {value: 'Saúde', viewValue: 'Saúde'},
    {value: 'Livre', viewValue: 'Livre'},
    {value: 'Essenciais', viewValue: 'Essenciais'},
    {value: 'Carro', viewValue: 'Carro'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private revenueService: RevenueService
  ) { }

  ngOnInit(): void {
    this.createForm(new Revenue())
  }

  createForm(revenue: Revenue) {
    // adicionar validators
    this.newRevenueForm = this.formBuilder.group({
      releaseType: ['', Validators.required],
      category: ['', Validators.required],
      description: [revenue.description, Validators.required],
      value: [revenue.value, Validators.required],
      revenueDate: ['', Validators.required]
    })
  }

  onSubmit() {
    const payload = this.newRevenueForm.value

    // Limpa o form após o envio
    this.createForm(new Revenue());

    this.revenueService.createRevenue(payload).subscribe(
      () => {
        // adicionar snackbar e também algum possivel erro.
        this.route.navigate(['revenue'])
      }
    )
  }


}
