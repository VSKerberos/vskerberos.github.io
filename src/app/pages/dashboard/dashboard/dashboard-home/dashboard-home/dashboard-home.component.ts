import { Component, OnInit } from '@angular/core';
import { IGeneral } from 'src/app/core/core/models/general';
import { FireBaseService } from 'src/app/core/services/fire-base.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  currentGeneral:IGeneral;

  constructor(    private firebaseService: FireBaseService, ) { }

  ngOnInit(): void {
    this.firebaseService.getGeneral().then(response =>{

      this.firebaseService.generalInformation = response as IGeneral;
      this.currentGeneral = this.firebaseService.generalInformation;
      console.log(  this.firebaseService.generalInformation);


    }).catch(error=>{
      console.log("get general error:"+error)
    });

  }

  onAddGeneral():void {

  let current:IGeneral = {

    numOfCategory:10,
    numOfMaterial:10,
    numOfProduct:10
  };

    var resp =this.firebaseService.addGeneral(current);
  }
}
