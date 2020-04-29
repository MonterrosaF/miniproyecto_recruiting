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
  fechaCompra: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}
  cambiarFecha(date: object) {
    console.log(date);

    this.fechaCambiada.emit(date);
  }
}
