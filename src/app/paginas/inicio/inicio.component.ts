import { Component, OnInit } from '@angular/core';
import {ApiVinosService} from '.././../api-vinos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  episodios: Array <any> =[]; 

  constructor(
    private api:ApiVinosService
  ) { }

  ngOnInit()  {
this.api.getvinos().subscribe((data:any)=>{
  console.log("la api", data["results"]);
this.episodios=data["results"];
  
  
})
  }

}
