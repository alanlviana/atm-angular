import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecladoNumericoVirtualComponent } from './teclado-numerico-virtual.component';

describe('TecladoNumericoVirtualComponent', () => {
  let component: TecladoNumericoVirtualComponent;
  let fixture: ComponentFixture<TecladoNumericoVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecladoNumericoVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecladoNumericoVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
