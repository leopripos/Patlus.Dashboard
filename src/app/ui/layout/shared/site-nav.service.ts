import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class SiteNavService {

  isOpened: boolean;

  constructor(private mediaObserver: MediaObserver) {
    this.isOpened = !mediaObserver.isActive('lg');
    mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      if (change) {
        this.isOpened = !mediaObserver.isActive('lt-lg');
      }
    });
  }

  isOver() {
    return this.mediaObserver.isActive('lt-lg');
  }

  open(): void {
    this.isOpened = true;
  }

  close(): void {
    this.isOpened = false;
  }

  toggle(): void {
    this.isOpened = !this.isOpened;
  }
}
