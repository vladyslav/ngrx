import {
  CountIncreaseAction,
  CountDecreaseAction,
  CountClearAction,
} from './reducers/count/count.actions';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountState } from './reducers/count/count.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(
    map((count) => count <= 0)
  );
  public updatedAt$: Observable<number> = this.store$.pipe(
    select(selectUpdatedAt)
  );

  constructor(private store$: Store<CountState>) {}

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }
  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }
  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
