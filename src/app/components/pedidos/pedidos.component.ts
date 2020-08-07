import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    idReserva: 1,
    nomeCliente: 'João Marcos',
    nomeMesa: 'Mesa 1',
    dataReserva: new Date(),
    pedidos: [
      {
        idPedido: 1,
        nomeItem: 'Feijoada',
        preco: 27.99
      },
      {
        idPedido: 2,
        nomeItem: 'Brasileiro',
        preco: 27.99
      }
    ]
  },
  {
    idReserva: 2,
    nomeCliente: 'Robson de Assis',
    nomeMesa: 'Mesa 2',
    dataReserva: new Date(),
    pedidos: [
      {
        idPedido: 10,
        nomeItem: '	Bife a cavalo	',
        preco: 27.99
      }
    ]
  },
  {
    idReserva: 3,
    nomeCliente: 'Daniel Lucas',
    nomeMesa: 'Mesa 4',
    dataReserva: new Date(),
    pedidos: [
      {
        idPedido: 1,
        nomeItem: 'Feijoada',
        preco: 27.99
      },
      {
        idPedido: 2,
        nomeItem: 'Brasileiro',
        preco: 27.99
      },
      {
        idPedido: 10,
        nomeItem: '	Bife a cavalo	',
        preco: 27.99
      },
      {
        idPedido: 10,
        nomeItem: '	Bife a cavalo	',
        preco: 27.99
      },
    ]
  }
];

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PedidosComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['idReserva', 'nomeCliente', 'nomeMesa', 'dataReserva'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit() {
  }

}
