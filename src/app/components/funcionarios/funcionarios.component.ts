import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarioForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    login: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  });

  public funcionarios$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private funcionariosService: FuncionariosService
  ) { }

  ngOnInit() {
    this.funcionarios$ = this.funcionariosService.getIndex();
  }

  save(){
    this.funcionariosService.cadastrar(this.funcionarioForm.value).then(
      () => {
        this.funcionarios$ = this.funcionariosService.getIndex();
      }
    )
    
  }


}
