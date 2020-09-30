import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidoDataSource } from './pedido-data-source';

export interface Pedidos{
  idPedido: number;
  nomeItem: string;
  preco: number;
}

export interface PeriodicElement {
  idReserva: number;
  nomeCliente: string;
  nomeMesa: string;
  dataReserva: Date
  pedidos: Pedidos[]
}


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
  columnsToDisplay = ['idComanda', "valorTotal", "mesa", "data"];
  expandedElement: PeriodicElement | null;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.dataSource = new PedidoDataSource(this.pedidosService);
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
}
