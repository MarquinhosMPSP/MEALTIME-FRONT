import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  get():Observable<any[]>{
    return this.http.get<any[]>(`https://staging-mealtime-api.herokuapp.com/mesas`);
  }
}
