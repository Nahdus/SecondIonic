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
        label:"Should i drink coffee?",
        decisiontype:"random",
        decisions:["yes","no"]
      },
      {
        id:2,
        label:"how should i spend this evening?",
        decisiontype:"customProbability",
        decisions:[
        {decision:"watch a movie",probability:0.9},
        {decision:"go for a walk",probability:0.1},
        
      ]
      }
    ]
    return{
      data:data
    }
  }
  genId(data): number {
    return data.length > 0 ? Math.max(...data.map(dataum => dataum.id)) + 1 : 11;
  }
}
