import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-inicio',
  templateUrl: './carousel-inicio.component.html',
  styleUrls: ['./carousel-inicio.component.css']
})
export class CarouselInicioComponent implements OnInit {
 
  public imagen1 : String;
  public imagen2 : String;
  public imagen3 : String;

  constructor() { 
   this.imagen1 = "/../../assets/img/shop1.png";
    this.imagen2 = "/../../assets/img/shop2.png";
    this.imagen3 = "/../../assets/img/shop3.png";
  }

  ngOnInit(): void {
  }

}
