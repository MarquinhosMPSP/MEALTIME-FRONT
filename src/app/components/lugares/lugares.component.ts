import { Component, OnInit } from '@angular/core';
//import { LugarService } from '../services/lugar.service';
//import { Lugares } from '../model/lugares';
import { LugarService } from '../../services/lugar.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {

  lugares = [
    {nomeMesa: "Cleiton", disponivel: true},
  ];

  //LugaresData:Lugares[] = [];


  constructor(private lugarService: LugarService) { }

  ngOnInit() {
    this.getIndex()
  }

  getIndex(){
    this.lugarService.getIndex().subscribe(
      (data) => {this.lugares = data}
    )
  }

  teter(item){
    this.lugarService.delete(item).subscribe(
      () => {
        console.log("deletado")        
        this.getIndex()
      },
      (error) => {
        console.log(error)
      }

    )


  }

}
