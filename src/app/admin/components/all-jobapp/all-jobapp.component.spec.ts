import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobappComponent } from './all-jobapp.component';

describe('AllJobappComponent', () => {
  let component: AllJobappComponent;
  let fixture: ComponentFixture<AllJobappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllJobappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
