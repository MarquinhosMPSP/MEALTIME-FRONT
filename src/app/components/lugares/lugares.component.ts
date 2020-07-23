import { Component, OnInit } from '@angular/core';
import { Lugares } from '../../model/lugares';
import { LugarService } from '../../services/lugar.service';
import { LugaresDataSource } from './lugares-data-source';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {

  displayedColumns: string[] = ['idMesa','nomeMesa','quantidadeLugares','disponivel', 'actions']
  dataSource: LugaresDataSource;
  LugaresData:Lugares[] = [];


  constructor(private lugarService: LugarService) { }

  ngOnInit() {
    this.dataSource = new LugaresDataSource(this.lugarService);
    this.dataSource.carregarLugar();
  }

  DeleteItem(item: Lugares){
    this.dataSource.deletarItem(item);
  }

}
