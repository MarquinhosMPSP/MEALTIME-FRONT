import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientesService } from 'src/app/services/clientes.service';

export class ClientesDataSource implements DataSource<any>{

    private clientesSubject$ = new BehaviorSubject<any[]>([]);

    constructor(
        private clientesService: ClientesService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.clientesSubject$.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.clientesSubject$.complete();
    }

    carregarUsuario(){
        this.clientesService.getIndex()
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(clientes => this.clientesSubject$.next(clientes));
    };
}
