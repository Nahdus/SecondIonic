import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import {DummyApiService} from "../dummy-api.service"
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  question:string

  constructor(private router: Router
    ,public actionSheetController: ActionSheetController
    ,private location:Location
    ,private dummyApiService:DummyApiService
    ) { }

  ngOnInit() {}
  goBack(){
    this.location.back()
    
  }
  create() {
    console.log("create at add question")
    const postData = {
      label: this.question
    };
    this.dummyApiService.createMatrix(postData).subscribe()
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Algorithm',
      buttons: [{
        text: 'Random Decision',
        icon: 'md-funnel',
        handler: () => {
          this.create()
          this.router.navigate(["/random"])
          console.log('Random Decision clicked');
        }
      }, {
        text: 'Probability decision',
        icon: 'md-funnel',
        handler: () => {
          this.router.navigate(["/probability"])
          console.log('Probability decision clicked');
        }
      }, {
        text: 'Multiple choice decision',
        icon: 'md-funnel',
        handler: () => {
          this.router.navigate(["/multiplechoice"])
          console.log('Multiple choice decision clicked');
        }
      }, {
        text: 'Introspective decision',
        icon: 'md-funnel',
        handler: () => {
          this.router.navigate(["/introspect"])
          console.log('Introspective decision clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  
}
