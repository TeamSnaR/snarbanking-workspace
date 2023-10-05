import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ExpenseFormStore } from './expense-form.store';
import { CurrencySymbolPipe } from '@snarbanking-workspace/shared/util-pipes';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'snarbanking-workspace-manage-expense-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencySymbolPipe],
  templateUrl: './manage-expense-form.component.html',
  providers: [ExpenseFormStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageExpenseFormComponent implements OnInit {
  // expenseFormStore = inject(ExpenseFormStore);
  // @Input({ required: true }) expenseFormData!: ExpenseFormData;
  // @Input({ required: true }) categories!: string[];
  // @Input({ required: true }) stores!: string[];

  // @Output() expenseFormSubmit = new EventEmitter<ExpenseFormData>();
  // @Output() expenseFormCancel = new EventEmitter<void>();
  #dialogData = inject(DIALOG_DATA);
  #expenseFormStore = inject(ExpenseFormStore);
  #uiDialogRef = inject(DialogRef);
  vm$ = this.#expenseFormStore.vm$;
  ngOnInit(): void {
    this.#expenseFormStore.initialize(this.#dialogData);
  }

  cancel() {
    this.close();
  }

  close() {
    this.#uiDialogRef.close();
  }

  save(expenseForm: NgForm) {
    // this.expenseFormStore.submit();
    this.#uiDialogRef.close(expenseForm.form.value);
  }

  // submitExpenseForm(expenseForm: NgForm) {
  //   if (!this.expenseFormStore.validate(expenseForm)) return;
  //   const expenseData = this.expenseFormStore.addExpense(expenseForm);
  //   this.expenseFormStore.resetExpenseForm(expenseForm);
  //   this.expenseFormSubmit.emit(expenseData);
  // }

  monthSelected($event: Event) {
    const month = ($event.target as HTMLInputElement).value;
    this.#expenseFormStore.selectMonth(+month);
  }
  yearSelected($event: Event) {
    const year = ($event.target as HTMLInputElement).value;
    this.#expenseFormStore.selectYear(+year);
  }
}
