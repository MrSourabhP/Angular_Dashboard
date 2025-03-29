import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarrerComponent } from './all-carrer.component';

describe('AllCarrerComponent', () => {
  let component: AllCarrerComponent;
  let fixture: ComponentFixture<AllCarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCarrerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
