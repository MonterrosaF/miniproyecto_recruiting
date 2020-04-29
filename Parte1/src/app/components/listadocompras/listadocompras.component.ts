import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CompraService } from './../../services/compra.service';
import { formatDate } from '@angular/common';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.component.html',
  styleUrls: ['./listadocompras.component.css'],
})
export class ListadocomprasComponent implements OnInit, OnChanges {
  @Input() fechaCompra: object;
  @Input() mostrarDatos: boolean;
  arrayCompras = [];
  visualizar = false;
  constructor(
    private compraService: CompraService,
    private spinnerService: NgxSpinnerService
  ) {}

  pageActual = 1;

  ngOnChanges(changes): void {
    if (changes.fechaCompra.currentValue) {
      this.getCompra(changes.fechaCompra.currentValue);
    }
    this.funcionCargando();
  }

  getCompra(date) {
    this.visualizar = false;
    const fechaFinal = date.year + '-' + date.month + '-' + date.day;
    const formattedDate = formatDate(fechaFinal, 'yyyy-MM-dd', 'en-US');

    this.compraService.getCompra(formattedDate).subscribe((compra) => {
      this.arrayCompras.push(compra);
    });
    this.visualizar = true;
    this.arrayCompras = [];
  }

  funcionCargando() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1500);
  }

  ngOnInit(): void {}
}
