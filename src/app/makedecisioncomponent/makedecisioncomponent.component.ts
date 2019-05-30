import { Component, OnInit, Input, HostListener } from '@angular/core';
import {DummyApiService} from "../dummy-api.service"
import {ActivatedRoute} from "@angular/router"
import {communicationService} from "../communicator/communicator.service"

import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-makedecisioncomponent',
  templateUrl: './makedecisioncomponent.component.html',
  styleUrls: ['./makedecisioncomponent.component.scss'],
})
export class MakedecisioncomponentComponent implements OnInit {
  @Input() matrix
  @Input() decision
  constructor(
    private route:ActivatedRoute,
    private dummyService:DummyApiService,
    private communicationService:communicationService,
    private alertController:AlertController
  ) { }

  ngOnInit():void {
    this.getMatrix();
  }
  getMatrix():void{
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.dummyService.getMatrix(id).subscribe((matrix:any)=>{
      console.log("The MAtrix",matrix) 
      this.matrix=matrix
    } )
  }
  makeDecision(listy){
    //console.log(listy)
    const decision=listy[Math.floor(Math.random()*listy.length)]
    this.presentAlert(decision)
  }
  async presentAlert(decision) {
    const alert = await this.alertController.create({
      header: "Decision",
      message: decision,
      
      });
    await alert.present()
  }
}
