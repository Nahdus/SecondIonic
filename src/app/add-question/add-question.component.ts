import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {

  constructor(private router: Router
    ,public actionSheetController: ActionSheetController
    ,private location:Location) { }

  ngOnInit() {}
  goBack(){
    this.location.back()
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Algorithm',
      buttons: [{
        text: 'Random Decision',
        icon: 'md-funnel',
        handler: () => {
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
