import { Component } from '@angular/core';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-ipcom';
  fechaCalendario: object;
  constructor() {}
}
