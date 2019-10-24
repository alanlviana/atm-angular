import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { PlanoFundoComponent } from './plano-fundo/plano-fundo.component';
import { PlanoFundoAnimadoComponent } from './plano-fundo-animado/plano-fundo-animado.component';
import { TecladoNumericoVirtualComponent } from './teclado-numerico-virtual/teclado-numerico-virtual.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BarraTituloComponent, PlanoFundoComponent, PlanoFundoAnimadoComponent, TecladoNumericoVirtualComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    BarraTituloComponent,
    PlanoFundoComponent,
    PlanoFundoAnimadoComponent,
    TecladoNumericoVirtualComponent
  ]
})
export class LayoutComumModule { }
