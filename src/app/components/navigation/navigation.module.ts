import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
