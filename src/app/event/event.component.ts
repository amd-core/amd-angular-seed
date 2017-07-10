import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fmf-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {
  @Input() public label: string = '';
  @Input() public time: Date = new Date();
  @Input() public hasPlayImage: boolean = true;
}
