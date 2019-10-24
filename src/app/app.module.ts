import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaDescansoModule } from './tela-descanso/tela-descanso.module';
import { LoginAgenciaContaModule } from './login-agencia-conta/login-agencia-conta.module';
import { LayoutComumModule } from './layout-comum/layout-comum.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutComumModule,
    TelaDescansoModule,
    LoginAgenciaContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
