import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../../services/cardapio.service';
import { Cardapio } from '../../model/cardapio';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
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

  private subscription: Subscription = new Subscription();
  cardapioData$: Observable<Cardapio[]>;

  constructor(
    private cardapioService: CardapioService,
    public dialog: MatDialog,
    private notificationService: NotificationService) {}

  ngOnInit() {
    this.dataSource = new CardapioDataSource(this.cardapioService);
    this.dataSource.carregarCardapio();
  }


  deleteItem(item: Cardapio){
    this.dataSource.deletarItem(item);
  }

  cadastrarItem(){
    let dialogRef = this.dialog.open(FormularioComponent, {width: '800px'});
    this.subscription = dialogRef.afterClosed()
      .subscribe(
        updating => {
          if (updating) this.dataSource.carregarCardapio();
        },
        );
  }

  editarItem(item:Cardapio){
    let dialogRef = this.dialog.open(FormularioComponent, {width: '800px', data: item});
    this.subscription = dialogRef.afterClosed()
      .subscribe(
        updating => {
          if(updating) this.dataSource.carregarCardapio();
        }
      )

  }

  ngOnDestroy() {
      this.subscription.unsubscribe()      
    }


}
