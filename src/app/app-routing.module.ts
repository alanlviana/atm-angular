import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperTelaDescansoComponent } from './tela-descanso/wrapper-tela-descanso/wrapper-tela-descanso.component';
import { LoginAgenciaContaComponent } from './login-agencia-conta/login-agencia-conta/login-agencia-conta.component';

const routes: Routes = [
  { path: '', redirectTo:'TelaDescanso', pathMatch: 'full' },
  { path: 'TelaDescanso', component: WrapperTelaDescansoComponent, data: { state: 'teladescanso' } },
  { path: 'LoginAgenciaConta', component: LoginAgenciaContaComponent, data: { state: 'loginagenciaconta' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
