import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaqComponent } from './consultar-faq.component';

describe('ConsultarFaqComponent', () => {
  let component: ConsultarFaqComponent;
  let fixture: ComponentFixture<ConsultarFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFaqComponent]
    });
    fixture = TestBed.createComponent(ConsultarFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
