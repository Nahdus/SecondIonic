import { Component, OnInit } from '@angular/core';
import {DummyApiService} from "../dummy-api.service"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  matricies:{id:number,title:string,type:string}[]=[]
  constructor(private dummyApiService:DummyApiService){}
  ngOnInit(){
    this.getMatricies()
  }
  getMatricies():void{
    this.dummyApiService.getMatricies().subscribe((data:any[])=>{
      this.matricies=data
    })
  }

}
