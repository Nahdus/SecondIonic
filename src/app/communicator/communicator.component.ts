import { Component, OnInit, HostBinding } from '@angular/core';
import {communicationService} from "./communicator.service"

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.component.html',
  styleUrls: ['./communicator.component.scss'],
})
export class CommunicatorComponent implements OnInit {

  @HostBinding('class.is-open')bin=false
  constructor(
    private communicationService:communicationService
  ) { }

  ngOnInit() {
    this.communicationService.change.subscribe(bin =>{
      this.bin=bin
    })
  }

}
