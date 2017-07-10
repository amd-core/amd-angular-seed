import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { PositionService } from './position';

@Component({
  selector: 'fmf-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public isTracking: boolean = false;
  public isTrackingSupported: boolean = true;
  public today: Date;
  public currentTime: Date;
  public trackingStartTime: Date;
  public isTrackingPaused: boolean = false;

  public trackingEvents: Array<any> = new Array();

  constructor(
    private positionService: PositionService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.isTrackingSupported = this.positionService.init();
    this.today = new Date();
    setInterval(() => {
      this.currentTime = new Date();
      this.changeDetectorRef.markForCheck();
    }, 10);
  }

  public startTracking(): void {
    this.isTracking = this.positionService.startTracking();
    if (this.isTracking) {
      this.trackingStartTime = this.positionService.getLastEventTime();
    }
    this.changeDetectorRef.markForCheck();

    this.trackingEvents.unshift({
      label: 'Started Tracking',
      time: this.positionService.getLastEventTime(),
      hasPlayImage: true
    });
  }

  public stopTracking(): void {
    this.isTracking = !this.positionService.stopTracking();
    this.changeDetectorRef.markForCheck();
    this.trackingEvents = new Array();
  }

  public pauseTracking(): void {
    this.isTrackingPaused = true;

    this.positionService.pauseTracking();

    this.trackingEvents.unshift({
      label: 'Paused Tracking',
      time: this.positionService.getLastEventTime(),
      hasPlayImage: false
    });
  }

  public resumeTracking(): void {
    this.isTrackingPaused = false;

    this.positionService.resumeTracking();

    this.trackingEvents.unshift({
      label: 'Resumed Tracking',
      time: this.positionService.getLastEventTime(),
      hasPlayImage: true
    });
  }

  public getCurrentTime(): Date {
    console.log('Getting time');
    return new Date();
  }
}
