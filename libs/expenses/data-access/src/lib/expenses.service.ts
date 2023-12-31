import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { ExpensesEntity } from './+state/expenses.models';
@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {}

  getExpenses(): Observable<ExpensesEntity[]> {
    return this.httpClient.get<ExpensesEntity[]>('/api/expenses');
  }

  getExpenseDetails(expenseId: string): Observable<ExpensesEntity> {
    return this.httpClient.get<ExpensesEntity>(`/api/expenses/${expenseId}`);
  }

  addExpense(expenseData: ExpensesEntity): Observable<string> {
    return this.httpClient.post<string>('/api/expenses', expenseData);
  }

  updateExpense(expenseData: ExpensesEntity): Observable<void> {
    return this.httpClient.put<void>(
      `/api/expenses/${expenseData.id}`,
      expenseData
    );
  }

  deleteExpense(id: string): Observable<void> {
    return this.httpClient.delete<void>(`/api/expenses/${id}`);
  }
}
