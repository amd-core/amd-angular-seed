import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'amd-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
