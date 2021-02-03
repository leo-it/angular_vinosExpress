import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
 
import { Vino } from '../../vino';
import { VINOS } from '../../coleccion-vinos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  misVinos : Vino [];
  constructor() { 
    this.misVinos = VINOS;
  }

  ngOnInit(): void {
    
  }

}
