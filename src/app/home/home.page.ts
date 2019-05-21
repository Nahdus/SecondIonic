import { Component, OnInit } from '@angular/core';
import {DummyApiService} from "../dummy-api.service"
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  matricies:{id:number,title:string,type:string}[]=[]
  
  constructor(private dummyApiService:DummyApiService,
    private route:ActivatedRoute){
      route.params.subscribe(val => {
        console.log("navigated to home")
        this.dummyApiService.getMatricies().subscribe((data:any[])=>{
          this.matricies=data
        })
      })
    }

  ngOnInit(){
    console.log("homepage Init")
    this.getMatricies()
  }

  getMatricies():void{
    this.dummyApiService.getMatricies().subscribe((data:any[])=>{
      this.matricies=data
    })
  }
  deleteMatrix(id):void{
    console.log("deleted",id)
    this.matricies=this.matricies.filter((matrix)=>matrix.id!==id)
    this.dummyApiService.deleteMatrix(id).subscribe()

  }

}
