import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  SERVER_URL: string = "http://localhost:8080/api/";
  
  constructor(private httpClient:HttpClient) { }

  public getMatricies(){
    const url = this.SERVER_URL+"data"
    console.log(url)
    const rsponse=this.httpClient.get(url)
    console.log(rsponse)
    return rsponse
  }

  public getMatrix(id):Observable<Object>{
    //code to get decision matrix with id
    console.log("id",id)
    const url =`${this.SERVER_URL}data/${id}`
    console.log("url",url)
    const httprespon= this.httpClient.get(url)
    console.log(httprespon)
    return httprespon
  }

  public createMatrix(matrix) {
    const url = `${this.SERVER_URL}data/`
    console.log(url,matrix)
    return this.httpClient.post(url,matrix)
      
  } //updateTask

  public deleteMatrix(id){
    const url = `${this.SERVER_URL}data/${id}`
    console.log(url)
    return this.httpClient.delete(url)
  }

}

