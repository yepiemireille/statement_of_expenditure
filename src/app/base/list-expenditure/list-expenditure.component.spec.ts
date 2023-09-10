import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenditureComponent } from './list-expenditure.component';

describe('ListExpenditureComponent', () => {
  let component: ListExpenditureComponent;
  let fixture: ComponentFixture<ListExpenditureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExpenditureComponent]
    });
    fixture = TestBed.createComponent(ListExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
