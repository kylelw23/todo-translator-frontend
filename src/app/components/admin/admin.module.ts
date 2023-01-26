import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, NavigationModule, MatCardModule, MatListModule],
  declarations: [AdminComponent],
  exports: [AdminComponent],
})
export class AdminModule {}
