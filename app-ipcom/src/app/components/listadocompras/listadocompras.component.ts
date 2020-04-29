import { Component, OnInit, Input } from '@angular/core';
import { CompraService } from './../../services/compra.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.component.html',
  styleUrls: ['./listadocompras.component.css'],
})
export class ListadocomprasComponent implements OnInit {
  @Input() fechaCompra: object;
  arrayCompras = [];
  visualizar = false;
  constructor(private compraService: CompraService) {
  }

  getAllCompras() {
    this.compraService.getAllCompras().subscribe((compras) => {
      console.log(compras);
    });
  }

  getCompra(date) {
    this.visualizar = false;
    const fechaFinal = date.year + '-' + date.month + '-' + date.day;
    const formattedDate = formatDate(fechaFinal, 'yyyy-MM-dd', 'en-US');
    console.log(formattedDate);

    this.compraService.getCompra(formattedDate).subscribe((compra) => {
      this.arrayCompras.push(compra);
      console.log(this.arrayCompras[0]);
    });
    this.visualizar = true;
    this.arrayCompras = [];
  }

  ngOnInit(): void {}
}
