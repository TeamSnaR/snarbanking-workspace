import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ExpensesActions from './expenses.actions';
import { ExpensesEntity } from './expenses.models';

export const EXPENSES_FEATURE_KEY = 'expenses';

export interface ExpensesState extends EntityState<ExpensesEntity> {
  selectedId?: string | number; // which Expenses record has been selected
  loaded: boolean; // has the Expenses list been loaded
  error?: string | null; // last known error (if any)
}

export interface ExpensesPartialState {
  readonly [EXPENSES_FEATURE_KEY]: ExpensesState;
}

export const expensesAdapter: EntityAdapter<ExpensesEntity> =
  createEntityAdapter<ExpensesEntity>();

export const initialExpensesState: ExpensesState =
  expensesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialExpensesState,
  on(ExpensesActions.initExpenses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ExpensesActions.loadExpensesSuccess, (state, { expenses }) =>
    expensesAdapter.setAll(expenses, { ...state, loaded: true })
  ),
  on(ExpensesActions.loadExpensesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function expensesReducer(
  state: ExpensesState | undefined,
  action: Action
) {
  return reducer(state, action);
}