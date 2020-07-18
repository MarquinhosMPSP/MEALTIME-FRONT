import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/model/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  itemForm = this.fb.group({
    nome: ['', [Validators.required]],
    preco: [0, [Validators.required, Validators.min(0)]],
    tempoPreparo: [0, [Validators.required, Validators.min(0)]],
    descricao: [[], [Validators.required]],
    pratoImgUrl: [[], [Validators.required]],
    disponivel: [false, [Validators.required]]
  });

  constructor(
    private cardapioService: CardapioService,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  save(){
    console.log('cadastrar')
    this.cardapioService.cadastrar(this.itemForm.value)
      .subscribe(() => {console.log('cadastrou')});
  }


}
