import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PositionService {
  private lastEventTime: Date;
  private intervalId: number = -1;

  constructor(
    private http: Http
  ) { }

  public init(): boolean {
    return this.isTrackingSupported();
  }

  public getLastEventTime(): Date {
    return this.lastEventTime;
  }

  public startTracking(): boolean {
    return this.startTrackingTimer();
  }

  public resumeTracking(): boolean {
    return this.stopTrackingTimer();
  }

  public stopTracking(): boolean {
    return this.stopTrackingTimer();
  }

  public pauseTracking(): boolean {
    return this.stopTrackingTimer();
  }

  private startTrackingTimer(): boolean {
    if (!this.isTrackingSupported()) {
      console.error('Tracking is not supported');
      return false;
    }

    this.trackPosition();
    this.intervalId = setInterval(this.trackPosition.bind(this), 5000) as any;
    this.lastEventTime = new Date();
    return true;
  }

  private stopTrackingTimer(): boolean {
    if (!this.isTrackingSupported()) {
      console.error('Tracking is not supported');
      return false;
    }

    clearInterval(this.intervalId);
    this.intervalId = -1;
    this.lastEventTime = new Date();
    return true;
  }

  private isTrackingSupported(): boolean {
    return !!navigator.geolocation ? true : false;
  }

  private trackPosition(): void {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      console.log('Position', position);

      this.http.post('http://localhost:3600/position', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        time: position.timestamp
      }).subscribe((res: Response) => {
        console.log('Response', res, res.json());
      });
    });
  }
}
