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

  displayedColumns2: string[] = ['idReserva', 'status', 'pagamentoApp', 'nome', 'nomeMesa', 'dataReserva', 'garcom'];
  displayedColumns1: string[] = ['idReserva', 'status', 'pagamentoApp', 'nome', 'nomeMesa', 'dataReserva', 'garcom', 'acoes'];

  dataSource1: ReservasDataSource;
  dataSource2: ReservasDataSource;
  dataSource3: ReservasDataSource;
  dataSource4: ReservasDataSource;
  dataSource5: ReservasDataSource;


  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.dataSource1 = new ReservasDataSource(this.reservasService);
    this.dataSource1.carregarReservaFiltroStatus('aceita');
    this.dataSource2 = new ReservasDataSource(this.reservasService);
    this.dataSource2.carregarReservaFiltroStatus('cancelada');
    this.dataSource3 = new ReservasDataSource(this.reservasService);
    this.dataSource3.carregarReservaFiltroStatus('finalizada');
    this.dataSource4 = new ReservasDataSource(this.reservasService);
    this.dataSource4.carregarReservaFiltroStatus('criada');
    this.dataSource5 = new ReservasDataSource(this.reservasService);
    this.dataSource5.carregarReservaFiltroStatus('ativa');
  }

  data = null;
  filtroData1(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource1.carregarReservasFiltro(dataFormat, 'aceita');
  }

  filtroData2(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource2.carregarReservasFiltro(dataFormat, 'cancelada');
  }

  filtroData3(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource3.carregarReservasFiltro(dataFormat, 'finalizada');
  }

  filtroData4(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource4.carregarReservasFiltro(dataFormat, 'criada');
  }

  filtroData5(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource4.carregarReservasFiltro(dataFormat, 'ativa');
  }

  aceitarReserva(item: Reserva){
    this.dataSource4.atualizarReserva(item, 'aceita');
    this.dataSource1.carregarReservaFiltroStatus('aceita');
    this.dataSource4.carregarReservaFiltroStatus('criada');
  }

  recusarReserva(item: Reserva){
    this.dataSource4.atualizarReserva(item, 'cancelada');
    this.dataSource2.carregarReservaFiltroStatus('cancelada');
    this.dataSource4.carregarReservaFiltroStatus('criada');
  }

  limparFiltro(){
    this.dataSource1.carregarReservaFiltroStatus('aceita');
    this.dataSource2.carregarReservaFiltroStatus('cancelada');
    this.dataSource3.carregarReservaFiltroStatus('finalizada');
    this.dataSource4.carregarReservaFiltroStatus('criada');
  }

}
