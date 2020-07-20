import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugares } from '../model/lugares';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';

  getIndex():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(`${this.api_url}/mesas`)
  }

  delete(item:Lugares):Observable<any>{
    return this.http.delete<any>(`${this.api_url}/mesas/${item.idMesa}`)
  }
}
