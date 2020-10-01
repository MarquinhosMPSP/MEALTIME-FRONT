import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroRestauranteService } from 'src/app/services/cadastro-restaurante.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = this.fb.group({
    nomeRestaurante: ['', [Validators.required]],
    cnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    categoria: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    login: ['', [Validators.required]],
    senha :['', [Validators.required]]
  });

  constructor(
    private cadastroRestauranteService: CadastroRestauranteService,
    private fb: FormBuilder,
    private router: Router ) { }

  ngOnInit() {
  }

  cadastrar(){
    this.cadastroRestauranteService.cadastrar(this.cadastroForm.value);
    this.router.navigate(['/login']);
  }

}
