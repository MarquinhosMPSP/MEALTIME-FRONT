import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeNotificacoesComponent } from './area-de-notificacoes.component';

describe('AreaDeNotificacoesComponent', () => {
  let component: AreaDeNotificacoesComponent;
  let fixture: ComponentFixture<AreaDeNotificacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeNotificacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
