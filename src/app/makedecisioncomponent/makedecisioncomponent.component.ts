import { Component, OnInit, Input, HostListener } from '@angular/core';
import {DummyApiService} from "../dummy-api.service"
import {ActivatedRoute} from "@angular/router"
import {communicationService} from "../communicator/communicator.service"

import { AlertController } from '@ionic/angular'
import { zip } from 'rxjs';
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
    if(this.matrix.decisiontype==="random"){
      const decision=listy[Math.floor(Math.random()*listy.length)]
      this.presentAlert(decision)
    }
    if(this.matrix.decisiontype==="customProbability"){
      const probabilities=listy.map(x=>x.probability*100)
      const decisions=[]
      probabilities.forEach((reps,index) => {
        const arr= new Array(reps)
        arr.fill(listy[index].decision)
        decisions.push(...arr)
      });

      this.presentAlert(decisions[Math.floor(Math.random()*decisions.length)])
    }
}
  async presentAlert(decision) {
    const alert = await this.alertController.create({
      header: "Decision",
      message: decision,
      
      });
    await alert.present()
  }
}
