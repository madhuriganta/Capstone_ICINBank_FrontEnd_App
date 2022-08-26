import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryaccountComponent } from './primaryaccount.component';

describe('PrimaryaccountComponent', () => {
  let component: PrimaryaccountComponent;
  let fixture: ComponentFixture<PrimaryaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
