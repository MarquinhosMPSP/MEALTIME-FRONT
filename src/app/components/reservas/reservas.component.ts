import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Reserva } from 'src/app/model/reserva';
import { ReservasDataSource } from './reservas-data-source';
import * as moment from 'moment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
  }

}
