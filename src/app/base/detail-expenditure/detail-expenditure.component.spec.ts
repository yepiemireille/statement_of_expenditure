import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpenditureComponent } from './detail-expenditure.component';

describe('DetailExpenditureComponent', () => {
  let component: DetailExpenditureComponent;
  let fixture: ComponentFixture<DetailExpenditureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailExpenditureComponent]
    });
    fixture = TestBed.createComponent(DetailExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
