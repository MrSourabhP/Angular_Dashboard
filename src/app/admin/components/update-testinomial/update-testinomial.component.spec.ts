import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestinomialComponent } from './update-testinomial.component';

describe('UpdateTestinomialComponent', () => {
  let component: UpdateTestinomialComponent;
  let fixture: ComponentFixture<UpdateTestinomialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTestinomialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTestinomialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
