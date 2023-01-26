import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUsageComponent } from './userusage.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [UserUsageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    NavigationModule,
  ],
  exports: [UserUsageComponent],
})
export class UserUsageModule {}
