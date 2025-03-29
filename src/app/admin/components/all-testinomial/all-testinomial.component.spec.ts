import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestinomialComponent } from './all-testinomial.component';

describe('AllTestinomialComponent', () => {
  let component: AllTestinomialComponent;
  let fixture: ComponentFixture<AllTestinomialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTestinomialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTestinomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
