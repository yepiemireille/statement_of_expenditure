import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenditureComponent } from './add-expenditure.component';

describe('AddExpenditureComponent', () => {
  let component: AddExpenditureComponent;
  let fixture: ComponentFixture<AddExpenditureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExpenditureComponent]
    });
    fixture = TestBed.createComponent(AddExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
