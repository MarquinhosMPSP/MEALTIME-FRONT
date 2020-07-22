import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../../services/cardapio.service';
import { Cardapio } from '../../model/cardapio';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { FormularioComponent } from './formulario/formulario.component';
import { CardapioDataSource } from './cardapio-data-source';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  displayedColumns: string[] = ['idItem', 'nome', 'preco', 'descricao', 'disponivel', 'tempoPreparo', 'pratoImgUrl', 'actions'];
  dataSource: CardapioDataSource;

  cardapioData$: Observable<Cardapio[]>;

  constructor(
    private cardapioService: CardapioService,
    public dialog: MatDialog,
    private notificationService: NotificationService) {}

  ngOnInit() {
    this.getItems();
    this.dataSource = new CardapioDataSource(this.cardapioService);
    this.dataSource.carregarCardapio();
  }

  getItems(){
    this.cardapioData$ = this.cardapioService.getIndex();
  }

  deleteItem(item: Cardapio){
    this.dataSource.deletarItem(item);
  }

  cadastrarItem(){
    let dialogRef = this.dialog.open(FormularioComponent, {width: '800px'});
    dialogRef.afterClosed()
      .subscribe(
        updating => {
          if (updating) this.dataSource.carregarCardapio();
        }
    );
  }

  editarItem(item:Cardapio){
    let dialogRef = this.dialog.open(FormularioComponent, {width: '800px', data: item});
    dialogRef.afterClosed()
      .subscribe(
        updating => {
          if(updating) this.dataSource.carregarCardapio();
        }
      )
  }



}
