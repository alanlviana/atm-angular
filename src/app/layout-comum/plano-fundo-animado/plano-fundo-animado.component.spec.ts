import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoFundoAnimadoComponent } from './plano-fundo-animado.component';

describe('PlanoFundoAnimadoComponent', () => {
  let component: PlanoFundoAnimadoComponent;
  let fixture: ComponentFixture<PlanoFundoAnimadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoFundoAnimadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoFundoAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
