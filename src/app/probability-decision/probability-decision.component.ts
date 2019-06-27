import { Component, OnInit, Input } from '@angular/core';
import {communicationService} from "../communicator/communicator.service"

@Component({
  selector: 'app-probability-decision',
  templateUrl: './probability-decision.component.html',
  styleUrls: ['./probability-decision.component.scss'],
})
export class ProbabilityDecisionComponent implements OnInit {
  @Input() minimumValue:number=0
  @Input() maximumValue:number=100
  @Input() choice:string
  @Input() Probability:string
  choices=[]
  label:string
  constructor(private communicationService:communicationService) { }
  
  
  ngOnInit() {
    this.label=this.communicationService.getLabel()
    console.log(this.label)
  }


  pushchoice(decision,probability){
    
    this.choices.push({
      decision:decision,
      probability:probability
    })
    console.log(this.choices)
    
  }

}
