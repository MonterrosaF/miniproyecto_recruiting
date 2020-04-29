import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  @Output()
  fechaCambiada: EventEmitter<object> = new EventEmitter<object>();

  @Output()
  mostrarData: EventEmitter<boolean> = new EventEmitter<boolean>();

  fechaCompra: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}
  cambiarFecha(date: object) {
    this.fechaCambiada.emit(date);
  }
  showInfo() {
    this.mostrarData.emit(true);
  }
}
