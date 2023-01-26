import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
  ],
  exports: [SigninComponent],
})
export class SigninModule {}
