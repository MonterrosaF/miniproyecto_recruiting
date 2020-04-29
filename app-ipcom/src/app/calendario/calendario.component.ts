import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  constructor() {}

  model: NgbDateStruct;

  ngOnInit(): void {}

}
