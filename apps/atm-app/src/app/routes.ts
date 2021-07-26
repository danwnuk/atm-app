import { Routes } from "@angular/router";
import { OverviewPageComponent } from '../../../../libs/atms/overview-page/src/lib/overview-page/overview-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OverviewPageComponent
  },
  {
    path: 'restock',
    loadChildren: () => import('@atm-app/atms/restock-page').then(m => m.AtmsRestockPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('@atm-app/atms/withdraw-page').then(m => m.AtmsWithdrawPageModule)
  }
];
