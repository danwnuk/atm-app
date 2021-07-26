import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { routes } from './routes';
import { AtmsOverviewPageModule } from '@atm-app/atms/overview-page';
import { SharedHeaderModule } from '@atm-app/shared/header';
import { AtmsToastCreatorModule } from '@atm-app/atms/toast-creator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot(),
    MatIconModule,
    MatSidenavModule,
    ToastrModule.forRoot(),

    SharedHeaderModule,
    AtmsToastCreatorModule,
    AtmsOverviewPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
