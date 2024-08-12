import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReservacionComponent } from './buscar-reservacion.component';

describe('BuscarReservacionComponent', () => {
  let component: BuscarReservacionComponent;
  let fixture: ComponentFixture<BuscarReservacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarReservacionComponent]
    });
    fixture = TestBed.createComponent(BuscarReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
