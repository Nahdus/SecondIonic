import { Component, OnInit, Input } from '@angular/core';
import {DummyApiService} from "../dummy-api.service"
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-makedecisioncomponent',
  templateUrl: './makedecisioncomponent.component.html',
  styleUrls: ['./makedecisioncomponent.component.scss'],
})
export class MakedecisioncomponentComponent implements OnInit {
  @Input() matrix
  constructor(
    private route:ActivatedRoute,
    private dummyService:DummyApiService
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

}
