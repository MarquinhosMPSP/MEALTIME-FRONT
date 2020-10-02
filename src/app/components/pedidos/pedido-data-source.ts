import { DataSource } from '@angular/cdk/table';
import { Pedidos } from 'src/app/model/pedidos';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PedidosService } from 'src/app/services/pedidos.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError } from 'rxjs/operators';
import { ReservasService } from 'src/app/services/reservas.service';

export class PedidoDataSource implements DataSource<Pedidos>{

    private pedidosSubject$ = new BehaviorSubject<Pedidos[]>([]);

    constructor(
        private pedidoService: PedidosService,
        private reservaService: ReservasService
        ) {}

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

        emProgresso(item, comanda){
            this.pedidoService.atualizar(item, comanda)
                .pipe(
                    catchError(() => of([]))
                )
                .subscribe(
                    () => {
                        this.carregarPedido();
                    }
                )
        }

        finalizar(item, comanda){
            this.pedidoService.finalizar(item, comanda)
                .pipe(
                    catchError(() => of([]))
                )
                .subscribe(
                    () => {
                        this.carregarPedido();
                    }
                )
        }

        fecharReserva(idReserva, status){
            this.reservaService.fecharReserva(idReserva, status)
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(
                () => {
                    this.carregarPedido();
                }
            )
        }
}
