import { Component } from '@angular/core';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-ipcom';
  arrayCompras = [];
  constructor(private compraService: CompraService) {}

  getAllCompras() {
    this.compraService.getAllCompras().subscribe((compras) => {
      console.log(compras);
    });
  }

  getCompra(date) {
    this.compraService.getCompra(date).subscribe((compra) => {
      this.arrayCompras.push(compra);
      console.log(this.arrayCompras[0]);
    });
  }
}
