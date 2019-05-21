import { Component, OnInit } from '@angular/core';
import {DummyApiService} from "../dummy-api.service";

@Component({
  selector: 'app-random-choice',
  templateUrl: './random-choice.component.html',
  styleUrls: ['./random-choice.component.scss'],
})
export class RandomChoiceComponent implements OnInit {
  matrices:Array<any>=[]
  constructor(
    private dummyService:DummyApiService
  ) { }

  ngOnInit() {}
  addMatrix(matrix){
    this.dummyService.createMatrix({label:matrix}).subscribe(data=>this.matrices.push(data))
    
  }

}
