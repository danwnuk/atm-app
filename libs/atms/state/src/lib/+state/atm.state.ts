import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

import { Withdraw, Stock } from './atm.actions';
import { ATMAction, ATMStateModel } from './atm.model';

@State<ATMStateModel>({
  name: 'atm',
  defaults: {
    atm: {
      denominations: [
          {
              value: 100,
              amountInStock: 10
          },
          {
              value: 50,
              amountInStock: 10
          },
          {
              value: 20,
              amountInStock: 10
          },
          {
              value: 10,
              amountInStock: 10
          },
          {
              value: 5,
              amountInStock: 10
          },
          {
              value: 1,
              amountInStock: 10
          }
      ]
    },
    history: []
  }
})
@Injectable()
export class ATMState {

  @Action(Withdraw)
  withdraw(ctx: StateContext<ATMStateModel>, { payload }: Withdraw) {
    let amountToWithdraw = payload;
    const denominations = ctx.getState().atm.denominations.map(denomination => ({ ...denomination }));
    const history = ctx.getState().history;

    denominations.filter(denomination => denomination.amountInStock > 0).forEach(denomination => {
      const optimal = Math.floor(amountToWithdraw / denomination.value);
      const actual = (denomination.amountInStock >= optimal ? optimal : denomination.amountInStock);

      amountToWithdraw -= actual * denomination.value;

      denomination.amountInStock -= actual;
    });

    if (amountToWithdraw > 0) {
      history.push({
        action: ATMAction.Withdraw,
        success: false,
        message: `Insufficient Funds (Amount Requested: $${payload}, Amount Unavailable: $${amountToWithdraw})`,
        date: new Date()
      });

      ctx.patchState({ history: [...history] });

    } else {

      history.push({
        action: ATMAction.Withdraw,
        success: true,
        message: `Dispensed $${payload}`,
        date: new Date()
      });

      ctx.patchState({
        atm: { denominations },
        history: [...history]
      });
    }
  }

  @Action(Stock)
  stock(ctx: StateContext<ATMStateModel>, { payload }: Stock) {
    const history = ctx.getState().history;

    history.push({
      action: ATMAction.Stock,
      success: true,
      message: 'Stock updated (' + payload.map(denomination => `$${denomination.value}: ${denomination.amountInStock}`).join(', ') + ')',
      date: new Date()
    });

    ctx.patchState({
      atm: { denominations: [ ...payload ] },
      history: [ ...history ]
    });
  }
}
