import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { ATMState } from './+state/atm.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([ATMState])],
  exports: [NgxsModule]
})
export class AtmsStateModule {}
