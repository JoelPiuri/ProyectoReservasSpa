import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoCorporalComponent } from './tratamiento-corporal.component';

describe('TratamientoCorporalComponent', () => {
  let component: TratamientoCorporalComponent;
  let fixture: ComponentFixture<TratamientoCorporalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoCorporalComponent]
    });
    fixture = TestBed.createComponent(TratamientoCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
