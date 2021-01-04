import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../core/models/revenue';
import { RevenueService } from '../services/revenue.service';

@Component({
  selector: 'app-edit-revenue',
  templateUrl: './edit-revenue.component.html',
  styleUrls: ['./edit-revenue.component.css']
})
export class EditRevenueComponent implements OnInit {
  editRevenueForm: FormGroup
  revenueItem

  constructor(
    private revenueService: RevenueService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRevenuesById()
    this.editForm(new Revenue())
  }

  editForm(revenue: Revenue) {
    // adicionar validators
    this.editRevenueForm = this.formBuilder.group({
      description: [revenue.description, Validators.required],
      value: [revenue.value, Validators.required],
      revenueDate: [revenue.revenueDate, Validators.required],
    })
  }

  getRevenuesById() {
    // extrai o id da rota
    const id = this.route.snapshot.params['id'];
    this.revenueService.getRevenuesById(id).subscribe((res) => {
      this.revenueItem = res
    })
  }

  onSubmit() {
    const payload = this.editRevenueForm.value

    // Limpa o form após o envio
    this.editForm(new Revenue());
    const id = this.route.snapshot.params['id'];
    this.revenueService.editRevenue(id, payload).subscribe(
      () => {
        this.router.navigate(['revenue'])
      }
    )
  }

}
