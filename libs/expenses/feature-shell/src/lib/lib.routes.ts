import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ExpensesEffects } from '@snarbanking-workspace/expenses/data-access';
import * as fromExpenses from '@snarbanking-workspace/expenses/data-access';
export const expensesFeatureShellRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@snarbanking-workspace/expenses/feature-view').then(
            (m) => m.expensesFeatureViewRoutes
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('@snarbanking-workspace/expenses/feature-details').then(
            (m) => m.expensesFeatureDetailsRoutes
          ),
      },
    ],
    providers: [
      provideState(
        fromExpenses.EXPENSES_FEATURE_KEY,
        fromExpenses.expensesReducer
      ),
      provideEffects(ExpensesEffects),
    ],
  },
];