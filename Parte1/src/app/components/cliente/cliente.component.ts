import { Component, OnInit } from '@angular/core';
import { CompraService } from './../../services/compra.service';
import { formatDate, Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  arrayCliente = [];

  constructor(
    private compraService: CompraService,
    private spinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private locationService: Location
  ) {}

  pageActual = 1;

  getAllComprasCliente(id: string) {
    this.compraService.getCompraCliente(id).subscribe((compra) => {
      this.arrayCliente.push(compra);
    });
    this.arrayCliente = [];
  }

  backClicked() {
    this.locationService.back();
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this.getAllComprasCliente(userId);
  }
}
