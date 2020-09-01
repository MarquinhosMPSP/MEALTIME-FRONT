import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/services/promocao.service';
import { Observable } from 'rxjs';
import { Cardapio } from 'src/app/model/cardapio';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent implements OnInit {

  public promocao$: Observable<Cardapio[]>;

  constructor(private promocaoService: PromocaoService) { }

  ngOnInit() {
    this.promocao$ = this.promocaoService.getIndex();
  }

}
