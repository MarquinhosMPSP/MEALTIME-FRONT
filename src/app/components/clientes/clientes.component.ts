import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClientesDataSource } from './clientes-data-source';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['idUsuario', 'nome', 'count'];
  dataSource: ClientesDataSource;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.dataSource = new ClientesDataSource(this.clientesService);
    this.dataSource.carregarUsuario()
  }

}
