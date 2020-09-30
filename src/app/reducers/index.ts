import { CountState, countReducer, countNode } from './count/count.reducer';
import { environment } from './../../environments/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
