import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuespedComponent } from './huesped.component';

describe('HuespedComponent', () => {
  let component: HuespedComponent;
  let fixture: ComponentFixture<HuespedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuespedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
