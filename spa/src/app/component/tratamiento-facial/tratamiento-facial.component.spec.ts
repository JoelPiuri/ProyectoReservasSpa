import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoFacialComponent } from './tratamiento-facial.component';

describe('TratamientoFacialComponent', () => {
  let component: TratamientoFacialComponent;
  let fixture: ComponentFixture<TratamientoFacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoFacialComponent]
    });
    fixture = TestBed.createComponent(TratamientoFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
