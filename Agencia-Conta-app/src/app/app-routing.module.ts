import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { TransacaoComponent } from './transacao/transacao.component';

const routes: Routes = [
  { path: '', component: ClienteComponent }, 
  { path: 'criar-transacao/:id', component: TransacaoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
