import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgenciaContaComponent } from './login-agencia-conta.component';

describe('LoginAgenciaContaComponent', () => {
  let component: LoginAgenciaContaComponent;
  let fixture: ComponentFixture<LoginAgenciaContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAgenciaContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAgenciaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
