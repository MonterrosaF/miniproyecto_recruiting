import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Compra } from './../interfaces/compra';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private api = 'https://apirecruit-gjvkhl2c6a-uc.a.run.app';

  constructor(private http: HttpClient) {}

  getCompra(date: string) {
    const path = `${this.api}/compras/${date}`;
    return this.http.get<Compra>(path);
  }

  getCompraCliente(date: string) {
    const path = `${this.api}/clientes/${date}`;
    return this.http.get<Compra>(path);
  }
}
