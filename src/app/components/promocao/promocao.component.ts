import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/services/promocao.service';
import { Observable, Subscription } from 'rxjs';
import { Cardapio } from 'src/app/model/cardapio';
import { MatDialog } from '@angular/material';
import { AtualizadorComponent } from './atualizador/atualizador.component';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent implements OnInit {

  public promocao$: Observable<Cardapio[]>;
  private subscription: Subscription = new Subscription();

  constructor(
    private promocaoService: PromocaoService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.promocao$ = this.promocaoService.getIndex();
  }

  cadastrarPromo(promo){
    let dialogRef = this.dialog.open(AtualizadorComponent, {width: '800px', data: promo});
    this.subscription = dialogRef.afterClosed()
      .subscribe(
        () => {
          this.promocao$ = this.promocaoService.getIndex();
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()      
  }

}
