import { TestBed } from '@angular/core/testing';

import { ExpenseFormStore } from './expense-form.store';

describe('ExpenseFormService', () => {
  let service: ExpenseFormStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseFormStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
