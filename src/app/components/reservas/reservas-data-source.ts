import { Reserva } from 'src/app/model/reserva';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ReservasService } from 'src/app/services/reservas.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError } from 'rxjs/operators';

export class ReservasDataSource implements DataSource<Reserva>{

    private reservaSubject$ = new BehaviorSubject<Reserva[]>([]);

    constructor(
        private reservasService: ReservasService) {}

    connect(collectionViewer: CollectionViewer): Observable<Reserva[]> {
        return this.reservaSubject$.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.reservaSubject$.complete();
    }

    carregarReservas(){
        this.reservasService.getIndex()
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(reserva => this.reservaSubject$.next(reserva));
    };

    carregarReservasFiltro(data, status){
        this.reservasService.getFiltros(data, status)
        .pipe(
            catchError(() => of([]))
        )
        .subscribe(reserva => this.reservaSubject$.next(reserva));
    }

}
