import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WithdrawPageComponent } from '@atm-app/atms/withdraw-page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmsWithdrawPageRoutingModule {}
