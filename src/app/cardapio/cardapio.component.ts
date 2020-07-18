import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../services/cardapio.service';
import { Cardapio } from '../model/cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio = [
    {nome: "Prato 1", preco: "20.99", categoria: "Brasileira"},
    {nome: "Prato 2", preco: "25.99", categoria: "Árabe"},
    {nome: "Prato 3", preco: "23.99", categoria: "Brasileira"},
    {nome: "Prato 4", preco: "26.99", categoria: "Massas"},
    {nome: "Prato 5", preco: "27.99", categoria: "Nordestina"},
    {nome: "Prato 6", preco: "28.99", categoria: "Mineira"},
    {nome: "Prato 7", preco: "29.99", categoria: "Lanche  "},
    {nome: "Prato 8", preco: "30.99", categoria: "Brasileira"},
    {nome: "Prato 9", preco: "31.99", categoria: "Árabe"}
  ];

  cardapioData:Cardapio[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {
    this.cardapioService.getIndex().subscribe(
      (data) => {this.cardapioData = data}
    )
  }

}
