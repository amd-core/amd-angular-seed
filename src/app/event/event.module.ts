import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from './event.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EventComponent],
  exports: [EventComponent]
})
export class EventModule { }
