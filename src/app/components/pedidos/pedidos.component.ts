import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidoDataSource } from './pedido-data-source';
import { ReservasService } from 'src/app/services/reservas.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PedidosComponent implements OnInit {
  dataSource: PedidoDataSource;
  columnsToDisplay = ['idComanda', "valorTotal", "mesa", "nome", "data", 'acoes' ];
  expandedElement: any | null;

  constructor(
    private pedidosService: PedidosService,
    private reservaService: ReservasService) { }

  ngOnInit() {
    this.dataSource = new PedidoDataSource(this.pedidosService, this.reservaService);
    this.dataSource.carregarPedido();
  }

  atualizar(){
    this.dataSource.carregarPedido();
  }

  emProgresso(item, comanda){
    this.dataSource.emProgresso(item, comanda);
  } 

  finalizar(item, comanda){
    this.dataSource.finalizar(item, comanda);
  } 

  fecharReserva(item){
    this.dataSource.fecharReserva(item.reserva.idReserva, 'finalizada')
  }
}
