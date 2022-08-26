import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTranactionsComponent } from './primary-tranactions.component';

describe('PrimaryTranactionsComponent', () => {
  let component: PrimaryTranactionsComponent;
  let fixture: ComponentFixture<PrimaryTranactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTranactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTranactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
