import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromSelectors from '@snarbanking-workspace/expenses/data-access';
import { ManageExpenseFormComponent } from '@snarbanking-workspace/expenses/ui-forms';

@Component({
  selector: 'snarbanking-workspace-expenses-feature-manage',
  standalone: true,
  imports: [CommonModule, ManageExpenseFormComponent],
  templateUrl: './expenses-feature-manage.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesFeatureManageComponent {
  store = inject(Store);
  expenseFormData$ = this.store.select(fromSelectors.selectExpenseDetailsVm);

  constructor() {
    this.store.dispatch(fromSelectors.getExpenseDetails({}));
  }
}
