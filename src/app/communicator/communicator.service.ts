import {Injectable,Output,EventEmitter} from "@angular/core"
import {DummyApiService} from "../dummy-api.service";




@Injectable()
export class communicationService{
    matrix=<any>{}
    constructor(private dummyApiService:DummyApiService){}

    @Output() change : EventEmitter<boolean>= new EventEmitter()

    public setLabel(label){
        this.matrix.label=label
    }
    public setDecisionType(decisionType){
        this.matrix.decisiontype=decisionType
    }
    public setDecision(decisionObj){
        this.matrix.decisions=decisionObj
    }

    public createMatrix(){
        if (this.matrix.hasOwnProperty("label")
        &&this.matrix.hasOwnProperty("decisiontype")
        &&this.matrix.hasOwnProperty("decisions"))
        {
            this.dummyApiService.createMatrix(this.matrix).subscribe()
            this.matrix={}
        }
    }
    
    
}