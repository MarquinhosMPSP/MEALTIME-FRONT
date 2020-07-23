import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Lugares } from 'src/app/model/lugares';
import { LugarService } from 'src/app/services/lugar.service';
import { catchError, finalize } from 'rxjs/operators';


export class LugaresDataSource implements DataSource<Lugares> {

    private lugaresSubject$ = new BehaviorSubject<Lugares[]>([]);

    constructor(
        private lugarService: LugarService) {}

    connect(collectionViewer: CollectionViewer): Observable<Lugares[]> {
        return this.lugaresSubject$.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lugaresSubject$.complete();
    }

    carregarLugar(){
        this.lugarService.getIndex()
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(lugares => this.lugaresSubject$.next(lugares));
    };

    deletarItem(item:Lugares){
        this.lugarService.delete(item)
            .pipe(
                catchError(() => of([]))
            )
            .subscribe(
                () => { this.carregarLugar() }
            )
    };



}