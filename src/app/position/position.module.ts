import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PositionService } from './position.service';

@NgModule({
  imports: [HttpModule],
  providers: [PositionService]
})
export class PositionModule { }
