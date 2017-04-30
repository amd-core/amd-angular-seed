import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule.withServerTransition({
    appId: 'amd-angular-seed'
  })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
