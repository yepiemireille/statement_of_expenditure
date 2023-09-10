import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueExpenditureComponent } from './historique-expenditure.component';

describe('HistoriqueExpenditureComponent', () => {
  let component: HistoriqueExpenditureComponent;
  let fixture: ComponentFixture<HistoriqueExpenditureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueExpenditureComponent]
    });
    fixture = TestBed.createComponent(HistoriqueExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
