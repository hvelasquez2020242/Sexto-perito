import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesEventosComponent } from './hoteles-eventos.component';

describe('HotelesEventosComponent', () => {
  let component: HotelesEventosComponent;
  let fixture: ComponentFixture<HotelesEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
