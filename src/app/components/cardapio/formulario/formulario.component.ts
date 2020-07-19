import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/model/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  itemForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    preco: [0, [Validators.required, Validators.min(0)]],
    tempoPreparo: [0, [Validators.required, Validators.min(0)]],
    descricao: [[], [Validators.required]],
    pratoImgUrl: [[], [Validators.required]],
    disponivel: [false, [Validators.required]]
  });

  item:Cardapio;

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    private cardapioService: CardapioService,
    private fb: FormBuilder) {}

  ngOnInit() {
  }

  save(){
    this.cardapioService.cadastrar(this.itemForm.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }

  cancel(){
    this.dialogRef.close(false);
  }


}
