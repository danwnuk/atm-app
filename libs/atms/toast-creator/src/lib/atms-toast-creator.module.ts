import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastCreatorComponent } from './toast-creator/toast-creator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ToastCreatorComponent
  ],
  exports: [
    ToastCreatorComponent
  ]
})
export class AtmsToastCreatorModule {}
