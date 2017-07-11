import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { TrackerComponent, TrackerModule } from './tracker';
import { ValidatorComponent, ValidatorModule } from './validator';

let routes: Array<Route> = [
  {
    path: '',
    component: ValidatorComponent
  },
  {
    path: 'tracker',
    component: TrackerComponent
  }
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'amd-angular-seed'
    }),
    RouterModule.forRoot(routes),
    TrackerModule, ValidatorModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
