import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{AddQuestionComponent} from "./add-question/add-question.component"
import {RandomChoiceComponent} from "./random-choice/random-choice.component"
import {ProbabilityDecisionComponent} from "./probability-decision/probability-decision.component";
import {MultipleChoiceDecisionComponent} from "./multiple-choice-decision/multiple-choice-decision.component"
import {IntrospectiveDecisionComponent} from "./introspective-decision/introspective-decision.component"

import { InMemoryWebApiModule } from "angular-in-memory-web-api"; 
import {DataService} from "./data.service"


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,
    AddQuestionComponent,
    RandomChoiceComponent,
    ProbabilityDecisionComponent,
    MultipleChoiceDecisionComponent,
    IntrospectiveDecisionComponent],

  entryComponents: [],

  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    HttpClientModule,
     AppRoutingModule,
     InMemoryWebApiModule.forRoot(DataService)
    ],

  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
