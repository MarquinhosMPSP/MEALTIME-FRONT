import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizadorComponent } from './atualizador.component';

describe('AtualizadorComponent', () => {
  let component: AtualizadorComponent;
  let fixture: ComponentFixture<AtualizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
