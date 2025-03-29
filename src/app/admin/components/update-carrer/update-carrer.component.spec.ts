import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarrerComponent } from './update-carrer.component';

describe('UpdateCarrerComponent', () => {
  let component: UpdateCarrerComponent;
  let fixture: ComponentFixture<UpdateCarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCarrerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
