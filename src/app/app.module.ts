import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PositionModule } from './position';
import { EventModule } from './event';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'amd-angular-seed'
    }),
    PositionModule, EventModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
