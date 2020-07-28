import { Component, OnInit } from '@angular/core';
import { ReservasDataSource } from '../reservas-data-source';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from 'src/app/model/reserva';

@Component({
  selector: 'app-pendente',
  templateUrl: './pendente.component.html',
  styleUrls: ['./pendente.component.scss']
})
export class PendenteComponent implements OnInit {

  displayedColumns: string[] = ['idReserva', 'status', 'pagamentoApp', 'dataReserva', 'acoes'];
  dataSource: ReservasDataSource;

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.dataSource = new ReservasDataSource(this.reservasService);
    this.dataSource.carregarReservaFiltroStatus('criada');
    this.reservasService.user;
  }

  data = null;
  filtroData(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource.carregarReservasFiltro(dataFormat, 'criada');
  }

  aceitarReserva(item: Reserva){
    this.dataSource.atualizarReserva(item, 'aceita');
  }

  recusarReserva(item: Reserva){
    this.dataSource.atualizarReserva(item, 'cancelada');
  }

}
