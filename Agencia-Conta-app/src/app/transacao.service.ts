import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Transacao } from './transacao/transacao';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  apiUrl: string = environment.apiBaseUrl + 'transacoes/';

  constructor(
    private http: HttpClient
  ) { }  

  save(clienteId: number, transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${this.apiUrl}cliente/${clienteId}`, transacao);
  }

  list(clienteId: number): Observable<Transacao[]> {
    const url = `${this.apiUrl}cliente/${clienteId}`;
    return this.http.get<Transacao[]>(url);
  }
 
  obterSaldoTotalPorCliente(clienteId: number): Observable<number> {
    const url = `${this.apiUrl}saldo/${clienteId}`;
    return this.http.get<number>(url);
  }
}
