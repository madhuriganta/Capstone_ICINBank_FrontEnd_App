import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSavingsAccountComponent } from './generate-savings-account.component';

describe('GenerateSavingsAccountComponent', () => {
  let component: GenerateSavingsAccountComponent;
  let fixture: ComponentFixture<GenerateSavingsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSavingsAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSavingsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
