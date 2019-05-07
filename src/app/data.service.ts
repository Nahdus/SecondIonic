import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api"
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    let data=[
      {
        id:1,
        lable:"Should i drink coffee?"
      },
      {
        id:2,
        lable:"how should i spend this evening?"
      }
    ]
    return{
      data:data
    }
  }
}
