import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class AppLoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
