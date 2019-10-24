import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAgenciaContaComponent } from './login-agencia-conta/login-agencia-conta.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComumModule } from '../layout-comum/layout-comum.module';

@NgModule({
  declarations: [LoginAgenciaContaComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutComumModule
  ],
  exports:[
    LoginAgenciaContaComponent
  ]
})
export class LoginAgenciaContaModule { }
