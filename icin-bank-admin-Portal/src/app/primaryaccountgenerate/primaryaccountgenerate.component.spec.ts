import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryaccountgenerateComponent } from './primaryaccountgenerate.component';

describe('PrimaryaccountgenerateComponent', () => {
  let component: PrimaryaccountgenerateComponent;
  let fixture: ComponentFixture<PrimaryaccountgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryaccountgenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryaccountgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
