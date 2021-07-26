import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AtmsStateModule } from '@atm-app/atms/state';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, NgxChartsModule, MatRadioModule, AtmsStateModule],
  declarations: [
    OverviewPageComponent
  ],
})
export class AtmsOverviewPageModule {}
