import { ExpensesEntity } from '@snarbanking-workspace/expenses/data-access';

export type ExpenseFormData = Omit<
  ExpensesEntity,
  'id' | 'amount' | 'items'
> & {
  currency: string;
  amount: number;
} & {
  year: number;
  month: number;
  day: number;
};
