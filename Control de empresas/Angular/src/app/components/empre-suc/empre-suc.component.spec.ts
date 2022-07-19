import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreSucComponent } from './empre-suc.component';

describe('EmpreSucComponent', () => {
  let component: EmpreSucComponent;
  let fixture: ComponentFixture<EmpreSucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreSucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
