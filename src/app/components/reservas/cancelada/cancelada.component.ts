import { Component, OnInit } from '@angular/core';
import { ReservasDataSource } from '../reservas-data-source';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-cancelada',
  templateUrl: './cancelada.component.html',
  styleUrls: ['./cancelada.component.scss']
})
export class CanceladaComponent implements OnInit {

  displayedColumns: string[] = ['idReserva', 'status', 'pagamentoApp', 'dataReserva'];
  dataSource: ReservasDataSource;

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.dataSource = new ReservasDataSource(this.reservasService);
    this.dataSource.carregarReservaFiltroStatus('cancelada');
  }

  data = null;
  filtroData(event){
    this.data = new Date(event.value);
    let dataFormat = this.data.toISOString();
    this.dataSource.carregarReservasFiltro(dataFormat, 'cancelada');
  }


}
