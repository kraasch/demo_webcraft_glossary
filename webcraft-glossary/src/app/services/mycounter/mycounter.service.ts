
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycounterService {
  private count = new BehaviorSubject(0);
  count$ = this.count.asObservable();

  increment() { this.count.next(this.count.value + 1); }
  decrement() { this.count.next(Math.max(0, this.count.value - 1)); }
  reset() { this.count.next(0); }
  getCount() { return this.count.value; }

}
