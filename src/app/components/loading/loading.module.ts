import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppLoadingComponent } from './loading.component';

@NgModule({
  declarations: [AppLoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [AppLoadingComponent],
})
export class LoadingModule {}
