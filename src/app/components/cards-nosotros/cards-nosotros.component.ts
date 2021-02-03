import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-nosotros',
  templateUrl: './cards-nosotros.component.html',
  styleUrls: ['./cards-nosotros.component.css']
})
export class CardsNosotrosComponent implements OnInit {

  public card1 : String;
  public card2 : String;
  public card3 : String;
  public title : String;
  constructor() { 
   this.card1 = "/../../assets/img/martin.webp";
    this.card2 = "/../../assets/img/Mingo.webp";
    this.card3 = "/../../assets/img/pablo.webp";
    this.title= "Experto en vinos ";
    }

  ngOnInit(): void {
  }

}
