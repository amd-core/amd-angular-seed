import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerComponent } from './tracker.component';
import { PositionModule } from '../position';
import { EventModule } from '../event';

@NgModule({
  imports: [
    CommonModule, PositionModule, EventModule
  ],
  declarations: [TrackerComponent]
})
export class TrackerModule { }
