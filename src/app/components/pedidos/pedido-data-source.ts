import { DataSource } from '@angular/cdk/table';
import { Pedidos } from 'src/app/model/pedidos';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PedidosService } from 'src/app/services/pedidos.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError } from 'rxjs/operators';

export class PedidoDataSource implements DataSource<Pedidos>{

    private pedidosSubject$ = new BehaviorSubject<Pedidos[]>([]);

    constructor(
        private pedidoService: PedidosService) {}

        connect(collectionViewer: CollectionViewer): Observable<Pedidos[]> {
            return this.pedidosSubject$.asObservable();
        }
    
        disconnect(collectionViewer: CollectionViewer): void {
            this.pedidosSubject$.complete();
        }

        carregarPedido(){
            this.pedidoService.getIndex()
                .pipe(
                    catchError(() => of([]))
                )
                .subscribe(
                    (pedidos) => {
                        this.pedidosSubject$.next(pedidos);
                    });
        };
}