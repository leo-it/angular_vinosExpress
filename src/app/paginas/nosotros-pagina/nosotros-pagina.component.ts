import { Component, OnInit } from '@angular/core';
import {ApiVinosService} from '.././../api-vinos.service';
@Component({
  selector: 'app-nosotros-pagina',
  templateUrl: './nosotros-pagina.component.html',
  styleUrls: ['./nosotros-pagina.component.css']
})
export class NosotrosPaginaComponent implements OnInit {

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
