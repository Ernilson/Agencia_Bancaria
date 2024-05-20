import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Cliente } from './cliente/cliente';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl: string = environment.apiBaseUrl + 'clientes';

  constructor(
    private http: HttpClient
  ) { }

  save(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

   list() : Observable<Cliente[]>{
    return this.http.get<any>(this.apiUrl);
  }

  obterCliente(id: number): Observable<Cliente> {
    const apiUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Cliente>(apiUrl);
  }
}
