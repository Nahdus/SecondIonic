import { Component, OnInit, Input } from '@angular/core';
import {DummyApiService} from "../dummy-api.service";
import {communicationService} from "../communicator/communicator.service"

@Component({
  selector: 'app-random-choice',
  templateUrl: './random-choice.component.html',
  styleUrls: ['./random-choice.component.scss'],
})
export class RandomChoiceComponent implements OnInit {
  matrices:Array<any>=[]
  @Input() choice:string
  choicelist:Array<string>=[]
  constructor(
    private dummyService:DummyApiService,
    private communicationService:communicationService
  ) { }

  ngOnInit() {}
  addMatrix(matrix){
    this.communicationService.setDecisionType("random")
    this.communicationService.setDecision(this.choicelist)
    this.communicationService.createMatrix()
    //this.dummyService.createMatrix({label:matrix}).subscribe(data=>this.matrices.push(data))
        
  }
  pushchoice(){
    this.choicelist.push(this.choice)
    this.choice=""
  }

}
