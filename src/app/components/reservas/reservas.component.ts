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

  displayedColumns: string[] = ['idReserva', 'status', 'pagamentoApp', 'dataReserva'];
  dataSource: ReservasDataSource;

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.dataSource = new ReservasDataSource(this.reservasService);
    this.dataSource.carregarReservas();
  }

  
  status = 'todos';
  data = null;
  filtroData(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toUTCString();
    
    this.dataSource.carregarReservasFiltro(dataFormat, this.status);
  }

  filtroStatus(event){
    this.status = event.value;
    if(this.status !== 'todos'){
      this.dataSource.carregarReservasFiltro(this.data, this.status)
    }else{
      this.dataSource.carregarReservas();
    }
    
  }

}
