import { Component, OnInit } from '@angular/core';
import { Lugares } from '../../model/lugares';
import { LugarService } from '../../services/lugar.service';
import { LugaresDataSource } from './lugares-data-source';
import { FormulariolugaresComponent } from './formulariolugares/formulariolugares.component';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {

  displayedColumns: string[] = ['idMesa','nomeMesa','quantidadeLugares','disponivel', 'actions']
  dataSource: LugaresDataSource;
  LugaresData:Lugares[] = [];

  private subscription: Subscription = new Subscription();
  lugaresData$: Observable<Lugares[]>;

  constructor(
      private lugarService: LugarService,
      public dialog: MatDialog,  
    ) {}

  ngOnInit() {
    this.dataSource = new LugaresDataSource(this.lugarService);
    this.dataSource.carregarLugar();
  }

  DeleteItem(item: Lugares){
    this.dataSource.deletarItem(item);
  }

  cadastrarItem(){
    let dialogRef = this.dialog.open(FormulariolugaresComponent, {width: '800px'});
    this.subscription = dialogRef.afterClosed()
      .subscribe(
        updating => {
          if (updating) this.dataSource.carregarLugar();
        },
        );

      }

  editarItem(item:Lugares){
        let dialogRef = this.dialog.open(FormulariolugaresComponent, {width: '800px', data: item});
        this.subscription = dialogRef.afterClosed()
          .subscribe(
            updating => {
              if(updating) this.dataSource.carregarLugar();
            }
          )
    
        } 

    ngOnDestroy() {
          this.subscription.unsubscribe()      
        }


}
