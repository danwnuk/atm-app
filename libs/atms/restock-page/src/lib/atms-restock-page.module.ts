import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestockPageComponent } from './restock-page/restock-page.component';
import { AtmsRestockPageRoutingModule } from './atms-restock-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, AtmsRestockPageRoutingModule],
  declarations: [
    RestockPageComponent
  ],
})
export class AtmsRestockPageModule {}
