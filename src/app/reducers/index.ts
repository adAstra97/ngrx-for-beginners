import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {counterReducer, CounterState} from './counter';

//general state
export interface State {
  counter: CounterState;
}

// general reducers
export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};
