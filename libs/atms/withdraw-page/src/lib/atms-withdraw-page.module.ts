import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { AtmsWithdrawPageRoutingModule } from './atms-withdraw-page-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, AtmsWithdrawPageRoutingModule],
  declarations: [
    WithdrawPageComponent
  ],
})
export class AtmsWithdrawPageModule {}
