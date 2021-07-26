import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ATMSelectors, Denomination, Stock } from '@atm-app/atms/state';

@Component({
  selector: 'atm-app-restock-page',
  templateUrl: './restock-page.component.html',
  styleUrls: ['./restock-page.component.scss']
})
export class RestockPageComponent implements OnInit {
  @Select(ATMSelectors.denominations) denominations$!: Observable<Denomination[]>;

  restockForm!: FormGroup;

  labels: string[] = [];

  denominations!: Denomination[];

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.denominations$.subscribe(denominations => {
      this.denominations = denominations;

      this.createForm(denominations);
    });
  }

  createForm(denominations: Denomination[]): void {
    this.labels = [];
    this.restockForm = this.formBuilder.group({
      denominations: this.formBuilder.array(
        denominations.map(denomination => {
          this.labels.push(`Stock ($${denomination.value})`)
          return this.formBuilder.control(denomination.amountInStock);
        })
      )
    });
  }

  get denominationsForm() {
    return this.restockForm.get('denominations') as FormArray;
  }

  restock(value: string[]): void {
    this.denominations.map((denomination, index) => {
      denomination.amountInStock = +value[index];

      return denomination;
    });

    this.store.dispatch(new Stock(this.denominations));
  }
}
