import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariolugaresComponent } from './formulariolugares.component';

describe('FormulariolugaresComponent', () => {
  let component: FormulariolugaresComponent;
  let fixture: ComponentFixture<FormulariolugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariolugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariolugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
