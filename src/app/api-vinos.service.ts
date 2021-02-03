import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiVinosService {

  constructor(
    private url:HttpClient
  ) { }
  getvinos (){
  return this.url.get("https://rickandmortyapi.com/api/character")  
  }
}
