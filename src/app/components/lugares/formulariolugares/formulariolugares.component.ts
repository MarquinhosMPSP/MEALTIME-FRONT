import { Component, OnInit, Inject } from '@angular/core';
import { Lugares } from 'src/app/model/lugares';
import { LugarService } from 'src/app/services/lugar.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulariolugares.component.html',
  styleUrls: ['./formulariolugares.component.scss']
})
export class FormulariolugaresComponent implements OnInit {

  itemForm: FormGroup = this.fb.group({
    nomeMesa: ['', [Validators.required]],
    quantidadeLugares: [2, [Validators.required, Validators.min(2)]],
    disponivel: [false, [Validators.required]],
  });

  item = {
    nomeMesa: '',
    quantidadeLugares: 2,
    disponivel: false
  };



  constructor(public dialogRef: MatDialogRef<FormulariolugaresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Lugares,
    private lugarService: LugarService,
    private fb: FormBuilder) 
     {
      if(data){
        this.item.nomeMesa = data.nomeMesa;
        this.item.quantidadeLugares = data.quantidadeLugares;
        this.item.disponivel = data.disponivel;
        }
      }

  ngOnInit() {
    this.itemForm.setValue(this.item);
  }

  save(){
    if(this.data){
      this.lugarService.editar(this.data.idMesa, this.itemForm.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      })
    }else{
      this.lugarService.cadastrar(this.itemForm.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancel(){
    this.dialogRef.close(false);
  }



}
