import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{AddQuestionComponent} from "./add-question/add-question.component";
import {RandomChoiceComponent} from "./random-choice/random-choice.component";
import {ProbabilityDecisionComponent} from "./probability-decision/probability-decision.component";
import {MultipleChoiceDecisionComponent} from "./multiple-choice-decision/multiple-choice-decision.component"
import {IntrospectiveDecisionComponent} from "./introspective-decision/introspective-decision.component"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add', component: AddQuestionComponent },
  {path: 'random', component:RandomChoiceComponent},
  {path: 'probability', component:ProbabilityDecisionComponent},
  {path: 'multiplechoice', component:MultipleChoiceDecisionComponent},
  {path: 'introspect', component:IntrospectiveDecisionComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
