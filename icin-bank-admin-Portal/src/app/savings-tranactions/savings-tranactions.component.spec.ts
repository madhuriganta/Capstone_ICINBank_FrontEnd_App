import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTranactionsComponent } from './savings-tranactions.component';

describe('SavingsTranactionsComponent', () => {
  let component: SavingsTranactionsComponent;
  let fixture: ComponentFixture<SavingsTranactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsTranactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsTranactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
