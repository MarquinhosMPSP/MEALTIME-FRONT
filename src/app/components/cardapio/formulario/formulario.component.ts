import { Component, OnInit, Inject } from '@angular/core';
import { Cardapio } from 'src/app/model/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  item = {
    nome: '',
    preco: 0,
    tempoPreparo: 0,
    descricao: '',
    pratoImgUrl: '',
    disponivel: false
  };

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cardapio,
    private cardapioService: CardapioService,
    private fb: FormBuilder) {
      if(data){
        this.item.nome = data.nome;
        this.item.preco = data.preco;
        this.item.tempoPreparo = data.tempoPreparo;
        this.item.descricao = data.descricao;
        this.item.pratoImgUrl = data.pratoImgUrl;
        this.item.disponivel = data.disponivel;
      }
    }

  ngOnInit() {
    this.itemForm.setValue(this.item);
  }

  save(){
    if(this.data){
      this.cardapioService.editar(this.data.idItem, this.itemForm.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      })
    }else{
      this.cardapioService.cadastrar(this.itemForm.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancel(){
    this.dialogRef.close(false);
  }


}
