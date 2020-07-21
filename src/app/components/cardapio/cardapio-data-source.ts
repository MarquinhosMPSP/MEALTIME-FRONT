import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Cardapio } from 'src/app/model/cardapio';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CardapioService } from 'src/app/services/cardapio.service';
import { catchError, finalize } from 'rxjs/operators';

export class CardapioDataSource implements DataSource<Cardapio> {
    
    private cardapioSubject$ = new BehaviorSubject<Cardapio[]>([]);

    constructor(
        private cardapioService: CardapioService) {}

    connect(collectionViewer: CollectionViewer): Observable<Cardapio[]> {
        return this.cardapioSubject$.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.cardapioSubject$.complete();
    }

    carregarCardapio(){
        this.cardapioService.getIndex()
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(cardapio => this.cardapioSubject$.next(cardapio));
    };

    deletarItem(item:Cardapio){
        this.cardapioService.delete(item)
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(
                () => { this.carregarCardapio() }
            )
    };
      
}
