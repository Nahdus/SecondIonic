import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  SERVER_URL: string = "http://localhost:8080/api/";
  
  constructor(private httpClient:HttpClient) { }

  public getMatricies(){
    return this.httpClient.get(this.SERVER_URL+"data")
  }

  public createMatrix(update) {
    return this.httpClient
      .post(this.SERVER_URL + "data", update)
      
  } //updateTask



}

