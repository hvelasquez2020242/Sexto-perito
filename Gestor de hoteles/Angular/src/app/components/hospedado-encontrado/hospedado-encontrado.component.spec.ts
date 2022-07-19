import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedadoEncontradoComponent } from './hospedado-encontrado.component';

describe('HospedadoEncontradoComponent', () => {
  let component: HospedadoEncontradoComponent;
  let fixture: ComponentFixture<HospedadoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedadoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedadoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
