import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitaComponent } from './aceita.component';

describe('AceitaComponent', () => {
  let component: AceitaComponent;
  let fixture: ComponentFixture<AceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
