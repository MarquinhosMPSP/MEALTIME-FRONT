import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../services/lugar.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor(private lugarService: LugarService) { }

  ngOnInit() {
    this.lugarService.get().subscribe(
      (data) => {console.log(data)}
    )
  }

}
