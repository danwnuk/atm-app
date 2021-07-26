import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Withdraw } from '@atm-app/atms/state';

@Component({
  selector: 'atm-app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.scss']
})
export class WithdrawPageComponent {
  constructor(private store: Store) { }

  withdraw(amount: number): void {
    this.store.dispatch(new Withdraw(amount));
  }
}
