import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PromocaoService } from 'src/app/services/promocao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizador',
  templateUrl: './atualizador.component.html',
  styleUrls: ['./atualizador.component.scss']
})
export class AtualizadorComponent implements OnInit {

  promoForm: FormGroup = this.fb.group({
    desconto: [0, [Validators.required, Validators.max(95)]]
  });
  
  private idItem = null;
  private dados = null;

  constructor(
    public dialogRef: MatDialogRef<AtualizadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private promocaoService: PromocaoService
  ) { 
    this.dados = data;
    this.idItem = data.idItem;
  }

  ngOnInit() {
  }

  save(){
    this.promocaoService.editar(this.idItem, this.promoForm.value)
    .subscribe(() => {
      this.dialogRef.close();
    })
  }

  cancel(){
    this.dialogRef.close();
  }

}
