import { Selector } from '@ngxs/store';

import { ATMStateModel } from './atm.model';
import { ATMState } from './atm.state';

export class ATMSelectors {

  @Selector([ATMState])
  static denominations(state: ATMStateModel) {
    return state.atm.denominations;
  }

  @Selector([ATMState])
  static history(state: ATMStateModel) {
    return state.history;
  }
}
