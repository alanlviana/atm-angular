import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperTelaDescansoComponent } from './wrapper-tela-descanso/wrapper-tela-descanso.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WrapperTelaDescansoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[
    WrapperTelaDescansoComponent
  ]
})
export class TelaDescansoModule { }
