import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroArticuloComponent } from './registro-articulo.component';

describe('RegistroArticuloComponent', () => {
  let component: RegistroArticuloComponent;
  let fixture: ComponentFixture<RegistroArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
