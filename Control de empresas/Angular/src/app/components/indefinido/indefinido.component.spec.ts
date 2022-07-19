import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndefinidoComponent } from './indefinido.component';

describe('IndefinidoComponent', () => {
  let component: IndefinidoComponent;
  let fixture: ComponentFixture<IndefinidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndefinidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndefinidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
