import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionarios } from '../model/funcionarios';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient, private userService: UserService) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';
  public user = this.userService.getUser();


  cadastrar(item):Promise<any>{
    item.idRestaurante = this.user.idRestaurante;
    item.idPerfil = 3;
    return this.http.post<any>(`${this.api_url}/usuarios`, item).toPromise();
  }

  getIndex():Observable<any[]>{
    return this.http.get<any[]>(`${this.api_url}/usuarios`)
  }
}
