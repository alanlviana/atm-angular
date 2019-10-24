import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTelaDescansoComponent } from './wrapper-tela-descanso.component';

describe('WrapperTelaDescansoComponent', () => {
  let component: WrapperTelaDescansoComponent;
  let fixture: ComponentFixture<WrapperTelaDescansoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperTelaDescansoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTelaDescansoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
